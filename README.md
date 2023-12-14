# HTMX-Bun Login Project

## Introduction

Welcome to the HTMX-Bun Login Project! This project demonstrates how to build a login system using a modern web development stack consisting of HTMX, JSX (as a templating engine), Bun, and Elysia.js. The focus is on simplicity and clarity to help beginners understand the fundamentals of web application development with these technologies.

## Project Structure

- `src/app.tsx`: The server setup, route definitions, and authentication handling.
- `src/layouts.tsx`: Contains JSX-based layout templates used throughout the application.

## Technologies Used

- **HTMX**: An extension to HTML, enabling advanced features directly in HTML.
- **JSX**: Used as a templating engine to describe the UI components in a more readable format.
- **Bun**: A fast all-in-one JavaScript runtime with a built-in package manager and bundler.
- **Elysia.js**: A JavaScript framework for building efficient, scalable Node.js server-side applications.

## Setup and Installation

1. **Clone the Repository**: `git clone [repository-link]`.
2. **Install Dependencies**: Run `bun install` to install the required packages.
3. **Starting the Server**:
   - For development: Run `bun run dev` for a hot-reload development server.
   - For production: Run `bun run start` to start the application.

## Understanding the Code

### `src/app.tsx`

- Main server setup and entry point.
- Defines routes and handles HTTP requests.
- Implements authentication using `@elysiajs/jwt` for JWT tokens and cookies.

### `layouts.jsx`

- Defines JSX-based layout templates for consistent look and feel across different pages.

## Contributing

Contributions are welcome! If you have suggestions or want to improve the code, please feel free to create a pull request or open an issue.
