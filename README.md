### [Last Video number : 7](https://www.youtube.com/watch?v=Vn4p4K6_M44&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=8&ab_channel=Codevolution)

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
      - review folder 
        - [reviewId] folder
          - page.tsx
    - page.tsx
  
---
- Catch all segements
  - docs folder
    - [...slug] folder
      - page.tsx
    - [[...slug]] folder // To show catch all segment page