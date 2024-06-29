import clsx from 'clsx';

import { Button } from '@homework-task/components/Button.tsx';
import { ComponentProps } from '@homework-task/types/AppTypes.ts';

export const ComponentHero = ({
    title,
    description,
    image,
    buttonText,
    className,
    onClick,
}: ComponentProps) => {
    return (
        <div
            className={clsx(`${className}`, 'bg-gray-900', 'text-white', 'p-8')}
        >
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'justify-end',
                    'items-start',
                    'md:flex-row'
                )}
            >
                <div>
                    <div className={clsx('text-4xl', 'font-bold', 'mb-4')}>
                        {title}
                    </div>
                    <div className={clsx('text-2xl')}>{description}</div>
                </div>
                <img src={image} alt="Hero" width="200" />
            </div>
            <Button onClick={onClick}>{buttonText}</Button>
        </div>
    );
};
