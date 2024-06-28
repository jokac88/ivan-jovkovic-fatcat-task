import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { UserProps } from '@homework-task/types/AppTypes.ts';

export const ListComponent = () => {
    const [userList, setUserList] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );

                checkData(res.ok);

                const data: unknown = await res.json();
                const users = data as UserProps[];

                setUserList(users);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData().catch((err) => {
            console.error('Error fetching users:', err);
        });
    }, []);

    const checkData = (status: boolean) => {
        if (!status) {
            throw new Error('Failed to fetch data');
        }
    };

    return (
        <ul
            className={clsx(
                'grid',
                'gap-y-8',
                'max-w-7xl',
                'p-8',
                'mx-auto',
                'md:grid-cols-3',
                'md:place-content-center',
                'md:gap-x-8',
                'xl:grid-cols-4'
            )}
        >
            {userList.map(({ id, name, username, email, phone }) => (
                <li
                    key={id}
                    className={clsx(
                        'p-5',
                        'rounded-2xl',
                        'bg-black',
                        'text-white'
                    )}
                >
                    <p>ID: {id}</p>
                    <p>Name: {name}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                </li>
            ))}
        </ul>
    );
};
