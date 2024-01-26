export const filterBlogs = (
  blogs: any,
  { filterByCategory, filterByTags }: any
) => {
  const filteredBlogs = blogs.reduce((acc: any, blog: any) => {
    if (filterByTags) {
      if (blog.tags.includes(filterByTags) === false) {
        return acc
      } else {
        acc.push(blog)
        return acc
      }
    }
    if (filterByCategory) {
      if (blog.category !== filterByCategory) {
        return acc
      } else {
        acc.push(blog)
        return acc
      }
    }
    return blogs
  }, [])
  return filteredBlogs
}
