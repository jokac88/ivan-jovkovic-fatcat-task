import { ReactNode, useEffect, useRef, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { FieldValues, useForm } from 'react-hook-form';
import { UseMutationResult } from 'react-query';
import { ZodSchema } from 'zod';

interface FormMethods {
    register: ReturnType<typeof useForm>['register'];
    errors: ReturnType<typeof useForm>['formState']['errors'];
    clearMessage: () => void;
}

interface FormGeneratorProps<T> {
    validationSchema: ZodSchema<T>;
    useMutationHooks: () => UseMutationResult<T, unknown, T>;
    renderForm: (props: FormMethods) => ReactNode;
    successMessage: string;
}

export const FormGenerator = <T extends FieldValues>({
    validationSchema,
    useMutationHooks,
    renderForm,
    successMessage,
}: FormGeneratorProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<T>({
        resolver: zodResolver(validationSchema),
    });

    const mutation = useMutationHooks();

    const messageRef = useRef<HTMLParagraphElement>(null);
    const [message, setMessage] = useState<string | null>(null);

    const onSubmit = (data: T) => {
        mutation.mutate(data, {
            onSuccess: () => {
                setMessage(successMessage);
                reset();
            },
            onError: (error: unknown) => {
                if (error instanceof Error) {
                    setMessage(error.message);
                }
            },
        });
    };

    useEffect(() => {
        if (mutation.isError || mutation.isSuccess) {
            messageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [mutation.isSuccess, mutation.isError]);

    const clearMessage = () => {
        if (message) {
            setMessage(null);
        }
    };

    return (
        <div
            className={clsx('flex', 'flex-col', 'max-w-2xl', 'mx-auto', 'p-8')}
        >
            <h1
                className={clsx('text-4xl', 'mb-4', 'font-bold', 'text-center')}
            >
                Form
            </h1>
            <form
                onSubmit={(event) => void handleSubmit(onSubmit)(event)}
                className={clsx('flex', 'flex-col', 'gap-y-7')}
            >
                {renderForm({ register, errors, clearMessage } as FormMethods)}
                <button
                    type="submit"
                    className={clsx(
                        'bg-primaryDark',
                        'p-2',
                        'rounded',
                        'font-bold',
                        'text-white',
                        'text-xl',
                        'duration-200',
                        'hover:bg-primary',
                        'disabled:opacity-50',
                        'disabled:cursor-not-allowed'
                    )}
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? 'Loading...' : 'Submit'}
                </button>
                {message && (
                    <p
                        ref={messageRef}
                        className={clsx(
                            'text-xl',
                            'font-medium',
                            mutation.isError ? 'text-isError' : ''
                        )}
                    >
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};
