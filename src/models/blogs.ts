import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from './firebase'

const Blogs = []
const Users = []
const Tags = []
const Categories = []
try {
  const getBlogs = await getDocs(
    query(
      collection(db, 'blogs'),
      where('publish', '==', true),
      orderBy('created_at', 'desc')
    )
  )
  const getUsers = await getDocs(query(collection(db, 'users')))

  const getTags = await getDocs(query(collection(db, 'tags')))

  const getCategory = await getDocs(query(collection(db, 'categories')))
  let categoryCounts = {}

  getCategory.forEach((doc) => {
    getBlogs.forEach((item) => {
      const blog = item.data()
      const categoryId = blog.category
      if (doc.id === categoryId) {
        categoryCounts[categoryId] = categoryCounts[categoryId] + 1 || 1
      }
    })
    Categories.push({
      id: doc.id,
      count: categoryCounts[doc.id] || 0,
      ...doc.data()
    })
  })

  getTags.forEach((doc) => {
    Tags.push({ id: doc.id, ...doc.data() })
  })

  getUsers.forEach((doc) => {
    Users.push({ id: doc.id, ...doc.data() })
  })
  getBlogs.forEach((doc) => {
    Blogs.push({ id: doc.id, ...doc.data() })
  })
} catch (e) {
  console.error('Error fetching data: ', e)
}

export { Blogs, Users, Tags, Categories }
