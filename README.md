### [Last Video number : 22](https://www.youtube.com/watch?v=7jBHW98vNjw&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=21&ab_channel=Codevolution)

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

- Title metadata
  - Page metadata will replace the layout metadata if they have the same properties
  - During merging the deepest section takes the priority 
  - For dynamic metadata , we can also make it dynamic
    ```
      const generateMetadata = ({ params }: Props): Metadata => {
       return {
        title: `Product ${params.productId}`,
       }
      }
    ```

---

- Title Metadata object
  ```
  export const metadata: Metadata = {
  title: {
    default: 'Learning Nextjs',
    template: '%s | learning nextjs', // Here %s will get replaced by title in the child
  },
  description: 'Generated by Next.js',
  }

  ```

---

- Navigating between route using App router
  - Use Link component for the Navigation client side
  - Use prop `replace` in the Link componentto replace the current history state in the browser
  - Programmatically navigate to to ` router.push('/') using useRouter or router.replace("/") or router.back()`

---

- Loading UI
  - In Nextjs when user navigate to the different routes in the same page it preserves the states.
  - Templates are similar to the layouts in that way they wrap each child layout or page. But with templates when a user navigated between routed that share a template a new instance of the component is mounted, DOM elements are recreated , state is preserved and effects are re-synchronized
  - Similar to layouts templates also should accept a children prop which will render the nested segements in the route
  - We should mostly rely on the layout 