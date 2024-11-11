import { Metadata } from 'next'

export const metadata: Metadata = {
  // title: 'Blog', // It replaces the %s in the title in the layout
  title: {
    absolute: 'Blog', // It will completely replace the title in the parent
  },
}

const Blogs = () => {
  return <h1>My Blogs</h1>
}

export default Blogs
