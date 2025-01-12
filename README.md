# Bistro Boss Restaurant

## Live Website

Visit the live website: [Bistro Boss](https://bistro-boss-c275a.web.app/)

## Project Overview

Bistro Boss is a visually appealing and highly functional restaurant web application designed to provide users with an exceptional dining experience. It features an interactive menu, seamless payment integration, and engaging animations, making it user-friendly and modern.

---

## Features

1. **Dynamic Menu System**

    - Filterable menu displaying food categories with detailed descriptions.
    - Backend integration for fetching menu items dynamically.

2. **User Authentication**

    - Secure login and registration using Firebase.
    - Quick access with Google sign-in.

3. **Responsive Design**

    - Fully responsive for compatibility with mobile, tablet, and desktop devices.

4. **Interactive Components**

    - Parallax scrolling effects.
    - Carousel sliders showcasing dishes and highlights.

5. **Payment Integration**

    - Secure Stripe integration for payments.

6. **Dashboard**

    - Role-based dashboards for users and admins.
    - Admins can manage menu items, orders, and users.
    - Users can view order history and account details.

7. **Ratings and Reviews**

    - Interactive rating system for dishes.
    - User feedback section.

8. **Engaging Animations**

    - Smooth animations using Swiper and React Parallax.

9. **Additional Features**
    - Custom alerts using SweetAlert2.
    - Tabs for seamless navigation.
    - Analytics visualized with Recharts.

---

## Technologies Used

### Frontend

-   **React.js** (with Vite for fast development and builds)
-   **Tailwind CSS** and **DaisyUI** for styling

### Backend

-   **Firebase** for authentication and backend services

### Libraries & Packages

-   `@tanstack/react-query` for state management
-   `axios` for API requests
-   `react-router-dom` for navigation
-   `react-hook-form` for form validation
-   `react-icons` for scalable icons
-   `react-responsive-carousel` for carousels
-   `react-tabs` for tab navigation
-   `swiper` for responsive sliders

---

## Installation Process

### Prerequisites

Make sure you have the following installed on your system:

-   **Node.js** (version 18 or higher)
-   **npm** (comes with Node.js)
-   A code editor like **VS Code**

### Steps to Install and Run the Project

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd client
    ```

3. Install project dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory of the project.
    - Add the following environment variables with your Firebase and Stripe credentials:
        ```env
        VITE_FIREBASE_API_KEY=<your-firebase-api-key>
        VITE_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
        VITE_FIREBASE_PROJECT_ID=<your-firebase-project-id>
        VITE_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
        VITE_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
        VITE_FIREBASE_APP_ID=<your-firebase-app-id>
        VITE_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
        ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open the project in your browser:
    - The development server will typically run at `http://localhost:5173`.

---

## Scripts

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the project for production.
-   `npm run lint`: Run ESLint to check code quality.
-   `npm run preview`: Preview the production build.

---

## Data Management

-   **State Management**:
    -   Data fetching and caching using React Query.
-   **Local Storage**:
    -   Used for temporary data persistence.

---

## Key React Concepts Used

1. **React Components**:

    - Modular and reusable functional components.

2. **React Router**:

    - Navigation and protected routes.

3. **React Hooks**:

    - Utilized `useState`, `useEffect`, `useContext`, and custom hooks.

4. **Context API**:

    - State management for user authentication and dashboards.

5. **React Query**:
    - Efficient handling of server state.
