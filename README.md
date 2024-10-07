### Last Video number : 5

---
- RSC
  - Server components
    - All Nextjs comp are server components
    - ability to run tasks like reading files or fetching data from a database
    - no ability to use hooks or handle intereactions
  - Client components
    - "use client" at the top of component
    - can't perform reading files , but they use hooks and manage interaction

---

- Routing
  - All routes must be in the app folder
  - Every route file must have name page.js or page.tsx
  - Every folder corresponds to the path segment
---
- Nested routes
    - blog folder
      - first folder
        - page.tsx
      - second folder
        - page.tsx
---
- Dynamic routes
  - products folder
    - [productId] folder
      - page.tsx
    - page.tsx