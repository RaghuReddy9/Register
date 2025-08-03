# VolunteerConnect

This is a Next.js application built with Firebase Studio that allows organizations to manage volunteer registrations. It features a public-facing registration page and a secure admin dashboard.

## Features

-   **Volunteer Registration:** A user-friendly form for individuals to sign up as volunteers.
-   **Admin Dashboard:** A protected area for administrators to view and manage volunteer applicants.
-   **Modern Tech Stack:** Built with Next.js, React, TypeScript, and ShadCN UI components.
-   **Authentication:** Secure login for administrators.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 20 or later)
-   [npm](https://www.npmjs.com/) (or another package manager like yarn or pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a file named `.env.local` in the root of your project and add the following credentials for the admin user. You can change these to whatever you like.

    ```env
    ADMIN_USERNAME=admin
    ADMIN_PASSWORD=password
    ```

    This file is ignored by Git, so your credentials will not be committed.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:9002](http://localhost:9002).

## How to Use

-   **Public Site:** Visit `http://localhost:9002` to see the homepage and the volunteer registration form.
-   **Admin Login:** Navigate to `http://localhost:9002/admin`. Use the credentials you set in the `.env.local` file to log in.
-   **Admin Dashboard:** After logging in, you will be redirected to `http://localhost:9002/admin/dashboard` to view the list of volunteer applicants.
