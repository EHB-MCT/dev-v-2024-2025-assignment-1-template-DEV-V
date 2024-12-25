# Project Conventions

This document outlines the conventions and best practices followed in this project to ensure consistency, readability, and maintainability.

---

## File and Folder Structure

### Structure:
- **/src**: Contains all the source code of the application.
  - **/assets/**: Static files (images, fonts, etc.).
  - **/components/**: Reusable components.
    - **/layout/**: Layout-related components (e.g., Header, Footer).
    - **/tasks/**: Task-specific components (e.g., TaskItem, TaskList).
  - **/pages/**: Page components (e.g., TodoPage).
  - **/hooks/**: Custom hooks for shared logic (e.g., `useTaskFilter`).
  - **/context/**: React Context for managing global state (e.g., TaskContext).
  - **/styles/**: Tailwind and additional CSS files.
  - **/utils/**: Utility functions for shared logic.

### Naming Conventions:
- **Files**: Use `PascalCase` for component files (e.g., `TodoPage.jsx`) and `camelCase` for non-component files (e.g., `taskContext.js`).
- **Folders**: Use lowercase names (e.g., `components`, `context`).

---

## Code Conventions

### Components:
- **Naming**: Components are named using `PascalCase`.
- **Props Validation**: Use `PropTypes` for all components receiving props.
- **Comments**: Each component includes a JSDoc-style comment at the top.

### Variables:
- Use `camelCase` for all variable and function names.
- Ensure variable names are descriptive and meaningful (e.g., `newTask`, `toggleComplete`).

---

## Styling
- Use **Tailwind CSS** for styling.
- Utility-first approach ensures minimal custom CSS.
- Responsiveness is achieved using Tailwind's media query utilities.

---

## Git Conventions

### Branch Naming:
- Use descriptive branch names based on the task:
  - `feat/feature-name` for new features.
  - `fix/bug-name` for bug fixes.
  - `chore/task-name` for maintenance tasks.

### Commit Messages:
- Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard:
  - `feat`: Adding a new feature.
  - `fix`: Fixing a bug.
  - `docs`: Documentation updates.
  - `style`: Code style changes (e.g., formatting, no logic changes).
  - `refactor`: Code changes that neither fix a bug nor add a feature.
  - `test`: Adding or modifying tests.
  - `chore`: Maintenance tasks (e.g., dependency updates).

### Example Commit Messages:
- `feat: add task filtering functionality`
- `fix: resolve alignment issue on mobile view`
- `chore: update npm dependencies`

---

## Documentation Conventions

### Comments:
- Use JSDoc-style comments for functions, components, and modules:

**Example:**

```jsx
/**
 * TodoPage component renders the main todo list page.
 * @returns {JSX.Element} The rendered component.
 */
const TodoPage = () => { ... };
```

### README and Other Docs:
- Keep the `README.md` concise with:
  - Project overview
  - Setup instructions
  - Deployment information
  - Contribution guidelines
- Move detailed technical documentation to separate markdown files (e.g., `CONVENTIONS.md`).

---

## Testing and Debugging
- Write unit tests for reusable components and utility functions.
- Use integration tests for critical workflows.
- Include mock data for testing components independently.

---

## Deployment
- Ensure the app is production-ready:
  - Run `npm run build` for optimized production builds.
  - Use hosting platforms like Netlify or Vercel.
- Include deployment scripts or CI/CD configurations where applicable.

---

## Collaboration Guidelines

### Pull Requests:
- Include a clear description of changes.
- Link to relevant issues or tasks.
- Request reviews from at least one team member.

### Code Reviews:
- Focus on readability, maintainability, and adherence to conventions.
- Ensure all comments and requested changes are addressed before merging.

---

This `CONVENTIONS.md` provides a comprehensive guide for maintaining consistency and quality throughout the project. Always refer to it when contributing or updating the codebase.

