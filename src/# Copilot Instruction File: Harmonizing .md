# Copilot Instruction File: Harmonizing a Bootstrap Template in React

## Objective

Transform a static Bootstrap HTML/CSS/JS template into a modern, maintainable React application using React components, state, and best practices.

---

## Steps for Copilot

### 1. **Project Setup**
- Ensure the React project is initialized (`create-react-app` or similar).
- Install Bootstrap:
  ```bash
  npm install bootstrap
  ```
- Import Bootstrap CSS in `src/index.js`:
  ```js
  import 'bootstrap/dist/css/bootstrap.min.css';
  ```

### 2. **Componentization**
- Break the template into logical React components (e.g., `Header`, `Footer`, `Sidebar`, `Stats`, etc.).
- Place each component in `src/components/ComponentName.jsx`.

### 3. **JSX Conversion**
- Convert HTML to JSX:
  - Change `class` to `className`.
  - Self-close tags where appropriate.
  - Use curly braces `{}` for dynamic content.
- Move inline styles or custom CSS to `src/index.css` or a dedicated CSS file.

### 4. **JavaScript Functionality**
- Replace jQuery or direct DOM manipulation with React state/hooks.
- For Bootstrap JS features (modals, dropdowns), use [React-Bootstrap](https://react-bootstrap.github.io/) or implement with React logic.

### 5. **App Composition**
- Import and use components in `App.jsx` to compose the UI.
- Pass data via props and manage state with hooks as needed.

### 6. **Testing & Refinement**
- Ensure all components render and behave as expected.
- Refactor for reusability and clarity.

### 7. **Hosting**
- Build the app:
  ```bash
  npm run build
  ```
- Deploy using Vercel, Netlify, or GitHub Pages.

---

## Good Prompting Examples

- "Convert this HTML section to a React component."
- "How do I implement a Bootstrap modal in React?"
- "Refactor this jQuery code to use React hooks."
- "Where should I import Bootstrap CSS in my React app?"
- "How do I split this template into reusable React components?"

---

**Note:**  
- Always use React conventions.
- Avoid direct DOM manipulation.
- Use state and props for interactivity.

---