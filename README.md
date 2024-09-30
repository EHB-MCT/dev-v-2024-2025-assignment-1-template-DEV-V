# Challenge 1: The perfect setup
This project is a starter file for React-based projects. The goal of this project is to provide a standard structure with all 
the conventions, documentations and tools required for successsful React project. 


---

Here’s the "Up & Running" section formatted properly for your README file:

---

## Up & Running

Follow these steps to set up and run the project locally:

1. **Navigate to the project directory:**
   ```bash
   cd Dev5
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the project:**
   ```bash
   npm run dev
   ```

---

# React Project Conventions

This document outlines the conventions used in this React-based project to ensure consistency, maintainability, and high-quality code.

---

## 1. File and Folder Structure

- Organize your project into clear, logical folders:
  - `/src/assets/`: For static files like images, fonts, and other assets.
  - `/src/components/`: Reusable React components (e.g., Header, Footer, Button).
  - `/src/pages/`: Pages or routes of your application (e.g., HomePage, AboutPage).
  - `/src/hooks/`: Custom hooks (e.g., `useFetch`, `useAuth`).
  - `/src/context/`: Global state management using React Context.
  - `/src/utils/`: Utility functions (e.g., `fetchData`, `formatDate`).
  - `/src/styles/`: Global styles, CSS modules, or SCSS files.

**Example folder structure:**

```bash
src/
├── assets/            # Images, fonts, and other static files
├── components/        # Reusable components
├── pages/             # Page components
├── hooks/             # Custom hooks
├── context/           # React Context for global state management
├── utils/             # Utility functions
├── styles/            # Global styles or CSS modules
├── App.js             # Main app component
└── index.js           # Entry point for the application
```

---

## 2. Naming Conventions

- **Component Names**: Use **PascalCase** for React components.
  - Example: `NavBar.js`, `UserProfile.js`

- **Function and Variable Names**: Use **camelCase** for functions and variables.
  - Example: `handleClick`, `fetchUserData`

- **CSS Class Names**: Use **kebab-case** for class names.
  - Example: `.header-title`, `.nav-bar`

- **State Variables and Setters**: Use descriptive names with hooks.
  - Example: `[isModalOpen, setIsModalOpen]`, `[userData, setUserData]`

---

## 3. Component Structure

- **Functional Components**: Prefer functional components over class components. Hooks should be called at the top level.
- **Hooks**: Use custom hooks for shared logic and start their names with `use` (e.g., `useFetch`, `useAuth`).

**Example:**

```jsx
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const UserProfile = ({ userId }) => {
  const { data: user, error } = useFetch(`/api/user/${userId}`);

  if (error) return <div>Error loading user data</div>;

  return (
    <div>
      {user ? (
        <div>{user.name}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
```

---

## 4. CSS Conventions

- Use **BEM (Block Element Modifier)** for CSS class naming.
  - **Block**: `.button`
  - **Element**: `.button__icon`
  - **Modifier**: `.button--primary`

**Example:**

```html
<button class="button button--primary">
  <span class="button__icon">🔍</span> Search
</button>
```

- Use **CSS Modules** or **SCSS** for modular styles in the `/styles/` folder.

---

## 5. State Management (React Context)

- Use **React Context** for global state management, organized in the `/context/` folder. 

**Example of a React Context setup:**

```jsx
// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
```

---

## 6. Data Flow and Props

- Pass data between components via **props**. Keep props descriptive and validate them using **PropTypes**.
  
**Example:**

```jsx
import PropTypes from 'prop-types';

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
```

---

## 7. Git and Commit Conventions

- **Branch Naming**: Use descriptive branch names.
  - Example: `feature/add-login-page`, `bugfix/fix-footer-style`

- **Commit Messages**: Follow the **Conventional Commits** format:
  - `feat: add login functionality`
  - `fix: resolve alignment issue on mobile`
  - `docs: update README with instructions`

---

## 8. Documentation Conventions

- Document functions, components, and modules using **JSDoc** or inline comments.

**Example:**

```js
/**
 * Fetch user data from the API.
 * @param {string} userId - The ID of the user to fetch.
 * @returns {Promise<object>} The user data.
 */
const fetchUserData = async (userId) => {
  const response = await fetch(`/api/user/${userId}`);
  const data = await response.json();
  return data;
};
```

- Ensure each project has a **README.md** file containing:
  - Project description
  - Setup instructions
  - Usage information
  - Contribution guidelines
  - Licensing information

---

## Sources 

Given are some examples, delete and replace with your own.

- [Multi auth in Laravel](https://stackoverflow.com/questions/50514738/multi-auth-use-one-page-login-laravel) used in http > controller > LoginController.php (line 18-67)
- [Audio from ChatGPT](https://chatgpt.com/c/66dae37e-6da8-8001-99ab-245ad328416a) used in resources > music
- [Chatgpt.com](https://chatgpt.com) ⚠️ this is an invalid example, because it links to a homepage instead of a specific page or issue
- Generate a ChatGPT share link: options (three dots) > share.
- If your lecturer still sees these default examples, you're in trouble
