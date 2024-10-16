### [Last Video number : 15](https://www.youtube.com/watch?v=FWlUf4FEQ1M&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=15&ab_channel=Codevolution)

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
        - page.**tsx**
---
- Dynamic routes
  - products folder
    - [productId] folder
      - page.tsx
      - review folder 
        - [reviewId] folder
          - page.tsx
    - page.tsx
  
---
- Catch all segements
  - docs folder
    - [...slug] folder  // To show catch all segment page means all the links after docs/abc/...
      - page.tsx
    - [[...slug]] folder // To show inital doc page
---
- Error page
  - Create file `not-found.tsx`
  - Call `import {notFound} method from 'next/navigatio'` to use error page from anywhere
  -   `not-found.tsx` can be created on folder level too

---
- Private folders
  - A private folder private implementation details and should not be considered by routing system including its sub-folders
  - `_lib` is the private implementation
  - For seperating UI Logic
  - For consistently organizing internal files across a project
  - for sorting and grouping files in code editors
  - use '%5F' if you want to add underscore in the route then it will not be considered by private folder
---
- Route Groups 
  - It helps us to keep the url clean for  many folders but under same type like : auth/login, auth/signup, auth/logout => login,signup,logout
  - Use `(auth)` paranthese

---
- Route Group layout
  - Every folder can have its own layout.

---

