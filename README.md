````markdown
# CRUD Test: ReactJS

Create a simple CRUD application with ReactJS & Material UI (MUI) that implements the models below and pages listed.

---

## 🧩 Application Pages

The application must contain the following pages with professional UI/UX design:

1. `/register` – User registration
2. `/login` – User authentication
3. `/dashboard` – Overview of user actions/data
4. `/dashboard/profile` – User information and profile editing
5. `/dashboard/books` – User's book management (CRUD)

---

## 📦 Models

### 🧑 User Entity

```ts
User {
    id: string
    firstName: string
    lastName: string
    emailAddress: string
    phone: string
    dateOfBirth: string
    role: 'admin' | 'user'
    createdAt: string
    updatedAt: string
}
```
````

### 📘 Book Entity

```ts
Book {
    id: string
    title: string
    author: string
    isbn: string
    category: string
    publishedDate: string
    ownerId: string  // foreign key to User
    createdAt: string
    updatedAt: string
}
```

---

## ✅ Required Features

- Use **Material UI** components. Refer to components [here](https://github.com/bluewave-labs/verifywise/tree/master/Clients/src/presentation/components)
- Implement **Clean Architecture**. Read this [guide](https://github.com/bluewave-labs/verifywise/blob/master/Clean_Architecture.md#clean-architecture)
- Ensure clean, descriptive Git commits throughout your work
- Store all data in **local browser storage**

---

## 🛂 Validations

- Validate all fields during user creation
- Use **Google's libphonenumber** to validate phone numbers
- User uniqueness: no duplicates based on `firstName`, `lastName`, `phone`, and `dateOfBirth`
- **Email** and **Phone** must be globally unique
- Book `isbn` must be unique

---

## 🎨 UI/UX Standards

- Build a modern, responsive, and intuitive UI
- Use Material UI components with consistent spacing and themes

### 🖼️ UI Design Examples

The following files from the `/images` folder serve as design inspiration:

![Login Signup Example](/images/login-signup.gif)
![Sidebar Example](/images/sidebar%20example.jpg)
![Dashboard Example](/images/dashboard-example.jpg)

> ⚠️ **Note**: These examples are **not** meant to be copied exactly.
> The more your design looks modern, functional, and polished like these examples, the more it shows your **experience and frontend development expertise**.

### 🔗 External Inspiration Links

- [Sidebar Design](https://dribbble.com/shots/15374919-Sidebar-Design-Components)
- [Dashboard UI](https://dribbble.com/shots/15158095-Admin-Dashboard-UI)
- [Login/Signup Screens](https://dribbble.com/shots/17512840-Login-Sign-up-Screens)

---

## 🧠 Developer Skill Level Indicators

> 💡 **Important Notes**:
>
> 1. The more items you complete from the lists below, the higher your demonstrated skill level will be.
> 2. Please use AI tools as little as possible during this test. We will be reviewing your code using AI tools, and we want to assess your own knowledge and capabilities.
> 3. There are no right or wrong answers in this test. What matters is your approach, perspective, and the insights you bring as a developer.

Use this test to help identify your developer level:

### 🔰 Junior Developer

- [ ] Can render and navigate between basic routes
- [ ] Uses `useState`, `useEffect` properly
- [ ] Implements basic MUI forms with validation
- [ ] Applies basic responsive layout using Grid/Flexbox
- [ ] Uses `localStorage` or `useReducer` for state
- [ ] Creates basic reusable UI components
- [ ] Writes simple `console.log`-based debugging
- [ ] Handles form submission with field validation
- [ ] Can create and push to a GitHub repository
- [ ] Demonstrates basic CRUD operations
- [ ] Understands prop drilling and basic component communication
- [ ] Adds minimal but functional styling

### ⚙️ Mid-Level Developer

- [ ] Uses Context API or a state management library (e.g., Zustand, Redux)
- [ ] Implements modular folder structures (e.g., domain/feature-based)
- [ ] Applies Formik/Yup for form handling and validation
- [ ] Implements protected routes and navigation guards
- [ ] Applies Clean Architecture layering correctly
- [ ] Writes unit tests with Jest or React Testing Library
- [ ] Follows semantic Git commit standards
- [ ] Adds sorting/filtering/pagination to book lists
- [ ] Uses `useMemo`, `useCallback` to optimize re-renders
- [ ] Extracts logic into services/hooks
- [ ] Builds a responsive drawer/sidebar layout
- [ ] Creates an interactive dashboard with stats or charts

### 🧠 Senior Developer

- [ ] Strictly applies Clean Architecture across the codebase
- [ ] Initializes project with TypeScript, Linting, Prettier
- [ ] Provides full test coverage (unit, integration, edge cases)
- [ ] Designs and documents component architecture
- [ ] Uses dependency injection and design patterns
- [ ] Manages async state using `Suspense` and error boundaries
- [ ] Implements dark/light mode theme with persistent state
- [ ] Implements robust error boundaries and fallback UI
- [ ] Uses code splitting, lazy loading, and profiling tools
- [ ] Organizes commits with changelogs and release notes
- [ ] Writes service-based modules that are testable and reusable
- [ ] Optionally sets up a basic CI/CD pipeline
- [ ] Performs accessibility (a11y) optimizations using ARIA tags
- [ ] Adds internationalization (i18n) support (bonus)

---

## 🚚 Delivery Instructions

1. Clone this repository into a **private GitHub repository**
2. **Do not erase** the original commit history (for review purposes)
3. Share repository access with:

   - `MuhammadKhalilzadeh`
   - `gorkem-bwl`

---

## 📎 Useful References

- [Code Structure Reference](https://github.com/bluewave-labs/verifywise/tree/develop/Clients)
- [Basic Git Instructions](https://github.com/MuhammadKhalilzadeh/basic-git-instructions?tab=readme-ov-file#making-pull-request-to-the-original-repository)
- [Git Collaborative Workflow](https://github.com/ajhollid/bluewave_collaborative_git?tab=readme-ov-file#making-a-pull-request)
- [Branch Naming Conventions](https://github.com/MuhammadKhalilzadeh/basic-git-instructions?tab=readme-ov-file#checking-out-and-creating-a-new-branch)

---
