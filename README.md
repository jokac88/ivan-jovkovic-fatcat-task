# Homework Task

## Description

This project is built with TypeScript, React, and Node.js.

## Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (>=18.0.0)
- npm (>=9.0.0)

## Installation

First, clone the repository:

```bash
git clone https://github.com/jokac88/ivan-jovkovic-fatcat-task.git
```

Then, navigate to the project directory:

```
cd ivan-jovkovic-fatcat-task
```

Install the project dependencies:

```
npm install
```

## Available Scripts

In the project directory, you can run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Builds the app for production to the build folder.

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

Lints the project using ESLint.  

```bash
npm run typecheck
# or
yarn typecheck
# or
pnpm typecheck
# or
bun typecheck
```

Checks the project for type errors.

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
# or
bun preview
```

Runs a preview of the built app.

## List Component

### Description

The `ListComponent` is a React component designed to fetch and display a list of users from a remote API endpoint (`https://jsonplaceholder.typicode.com/users`). It utilizes React's state management and useEffect hook to asynchronously fetch data on component mount.

### Features

- Fetches user data from a REST API (`https://jsonplaceholder.typicode.com/users`).
- Displays user information in a responsive grid layout.

## Form Generator Component

### Description

The `CreatePostForm` component uses `react-hook-form` for form handling, `zod` for form validation, and `react-query` for data fetching.  The form fields are defined and validated using a zod schema. The `useMutation` hook from react-query is used to handle the form submission and the subsequent API call.  The form fields and the submit button are rendered inside a `FormGenerator` component, which receives the validation schema, mutation hooks, and a render prop for rendering the form fields as props.

### Features

- The mutation function `useCreatePostMutation` is an asynchronous function that sends a POST request to the `https://jsonplaceholder.typicode.com/posts` endpoint.
- The function waits for the response from the server so if the response is not ok, it throws an error with the error message and if the response is ok, it parses the response JSON and returns the parsed data with success message.

## Page Generator Component

### Description

The `PageGenerator` component dynamically renders a page layout based on the provided data. It allows for flexible composition of different sections and components within a layout. The component accepts a single prop:  
`data`: An array of `ComponentData` objects.

### Features

- It iterates over the data array, creating a section for each `ComponentData` object. For each section, it renders the specified layout and iterates over the components array to render each component with its specified props.

