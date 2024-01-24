export const filterBlogs = (
  blogs: any,
  { filterByCategory, filterByTags }: any
) => {
  const filteredBlogs = blogs.reduce((acc: any, blog: any) => {
    if (blog.tags.includes(filterByTags)) return acc
    acc.push(blog)
    return acc;
  }, [])
  return filteredBlogs
}
