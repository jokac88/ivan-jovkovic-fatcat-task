import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@homework-task': '/src',
        },
    },
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
});
