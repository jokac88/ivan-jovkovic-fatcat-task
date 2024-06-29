import './styles.css';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CreatePostForm } from '@homework-task/components/CreatePostForm.tsx';
import { Landing } from '@homework-task/components/landing/Landing.tsx';
import { ListComponent } from '@homework-task/components/ListComponent.tsx';

function App() {
    const client = new QueryClient();

    return (
        <main>
            <Landing />
            <ListComponent />
            <QueryClientProvider client={client}>
                <CreatePostForm />
            </QueryClientProvider>
        </main>
    );
}

export default App;
