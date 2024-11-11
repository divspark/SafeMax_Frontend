# Safemax Security Landing Page

This is the official landing page for **Safemax Security**. The site allows users to learn about Safemax’s services, view testimonials, and contact the company. It also includes login and signup features, as well as an admin dashboard for managing content and users.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)

## About the Project

The **Safemax Security Landing Page** is a responsive Vite + React web application that showcases Safemax Security's services and includes a secure login system. Visitors can explore company offerings, view client testimonials, and reach out via the contact form. Registered users can log in, and administrators can access a CMS dashboard.

## Features

- **Landing Page Sections**:
  - **Header** with navigation links.
  - **About** section to provide details on Safemax Security.
  - **Services** section to highlight offerings.
  - **Why Choose Us** section explaining the company's unique value.
  - **Testimonials** carousel to display client feedback.
  - **Contact Form** for users to reach out directly.
  - **Footer** with contact information and links.

- **User Authentication**:
  - **Signup and Login**: Allows users to create accounts and log in securely.

- **Admin Dashboard**:
  - Access to manage site content, user information, and contact submissions.

## Technologies Used

- **Frontend**: Vite, React, React Router for navigation
- **UI Components**: CSS for styling
- **Backend**: Assumed to be connected (e.g., Node.js/Express backend)
- **Database**: Assumed to be used for user authentication (e.g., MongoDB, PostgreSQL)

## Getting Started

### Prerequisites

- **Node.js** and **npm** or **yarn** for dependency management.
- Backend server setup for handling authentication and managing CMS data (instructions provided separately if needed).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/safemax-security.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd safemax-security
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the Vite development server, run:
```bash
npm run dev
# or
yarn dev
```

The project should open in your browser at `http://localhost:5173`.

### Building for Production

To build the project for production, run:
```bash
npm run build
# or
yarn build
```

This will generate a `dist` folder with the optimized production build.

## Project Structure

```plaintext
safemax-security/
├── public/               # Public files like index.html
├── src/
│   ├── components/       # Reusable components (NavBar, Footer, etc.)
│   ├── pages/            # Main pages (LandingPage, Login, SignUp, AdminDashboard)
│   ├── App.jsx           # Main app component with route definitions
│   └── main.jsx          # Entry point for Vite + React
├── vite.config.js        # Vite configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```



