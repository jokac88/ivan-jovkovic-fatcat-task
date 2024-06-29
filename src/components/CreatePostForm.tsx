import clsx from 'clsx';
import { useMutation } from 'react-query';
import { z } from 'zod';

import { FormGenerator } from '@homework-task/components/FormGenerator.tsx';

const validationSchema = z.object({
    title: z.string().min(1, 'Title is required').max(50, 'Title is too long'),
    body: z.string().min(1, 'Body is required').max(200, 'Body is too long'),
});

type FormFields = z.infer<typeof validationSchema>;

const useCreatePostMutation = () => {
    return useMutation(
        (data: FormFields) =>
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to create post.');
                }

                return response.json();
            }),
        {
            onSuccess: () => {},
            onError: () => {},
        }
    );
};

export const CreatePostForm = () => {
    return (
        <FormGenerator<FormFields>
            validationSchema={validationSchema}
            useMutationHooks={useCreatePostMutation}
            renderForm={({ register, errors, clearMessage }) => (
                <>
                    <div className={clsx('relative', 'flex', 'flex-col')}>
                        <label htmlFor="title" className={clsx('text-lg')}>
                            Title
                            <span
                                className={clsx(
                                    'text-sm',
                                    'font-bold',
                                    'text-isError'
                                )}
                            >
                                *
                            </span>
                        </label>
                        <input
                            id="title"
                            type="text"
                            {...register('title', { onChange: clearMessage })}
                            className={clsx(
                                'p-2',
                                'border',
                                'rounded',
                                'focus:outline-none',
                                errors.title ? 'border-isError' : null
                            )}
                        />
                        {errors.title &&
                            typeof errors.title.message === 'string' && (
                                <p
                                    className={clsx(
                                        'absolute',
                                        'bottom-[-23px]',
                                        'font-sm',
                                        errors.title ? 'text-isError' : null
                                    )}
                                >
                                    {errors.title.message}
                                </p>
                            )}
                    </div>
                    <div className={clsx('relative', 'flex', 'flex-col')}>
                        <label htmlFor="body" className={clsx('text-lg')}>
                            Body
                            <span
                                className={clsx(
                                    'text-sm',
                                    'font-bold',
                                    'text-isError'
                                )}
                            >
                                *
                            </span>
                        </label>
                        <textarea
                            id="body"
                            {...register('body', { onChange: clearMessage })}
                            className={clsx(
                                'p-2',
                                'border',
                                'rounded',
                                'focus:outline-none',
                                errors.body ? 'border-isError' : null
                            )}
                        />
                        {errors.body &&
                            typeof errors.body.message === 'string' && (
                                <p
                                    className={clsx(
                                        'absolute',
                                        'bottom-[-23px]',
                                        'font-sm',
                                        errors.body ? 'text-isError' : null
                                    )}
                                >
                                    {errors.body.message}
                                </p>
                            )}
                    </div>
                </>
            )}
            successMessage="Post created successfully! :)"
        />
    );
};
