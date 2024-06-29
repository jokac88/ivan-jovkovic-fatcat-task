import './styles.css';
import clsx from 'clsx';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CreatePostForm } from '@homework-task/components/CreatePostForm.tsx';
import { Landing } from '@homework-task/components/landing/Landing.tsx';
import { ListComponent } from '@homework-task/components/ListComponent.tsx';
import { PageGenerator } from '@homework-task/components/PageGenerator.tsx';

const data = [
    {
        type: 'layoutSection',
        props: {
            children: <div />,
            background: 'primary',
        },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Component Hero',
                    description: 'Description',
                    image: 'https://via.placeholder.com/200',
                    buttonText: 'Submit',
                    className: clsx('max-w-7xl', 'mx-auto'),
                    onClick: () => alert('Button clicked in Component Hero'),
                },
            },
        ],
    },
    {
        type: 'flexLayoutSection',
        props: {
            children: <div />,
            background: 'mainGreen',
        },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    title: 'Component Items Showcase',
                    description: 'Description',
                    image: 'https://via.placeholder.com/200',
                    buttonText: 'Button',
                    className: clsx('max-w-7xl', 'mx-auto'),
                    onClick: () => alert('Button clicked'),
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    title: 'Component Trust Bar',
                    description: 'Description',
                    image: 'https://via.placeholder.com/200',
                    buttonText: 'Button',
                    className: clsx('max-w-7xl', 'mx-auto'),
                    onClick: () => alert('Button clicked'),
                },
            },
        ],
    },
];
function App() {
    const client = new QueryClient();

    return (
        <main>
            <Landing />
            <ListComponent />
            <QueryClientProvider client={client}>
                <CreatePostForm />
            </QueryClientProvider>
            <PageGenerator data={data} />
        </main>
    );
}

export default App;
