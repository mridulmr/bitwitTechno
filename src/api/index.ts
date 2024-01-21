import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  orderBy
} from 'firebase/firestore'
import { db } from './firebase'

export const GetBlog = async () => {
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

    getTags.forEach((doc) => {
      Tags.push({ id: doc.id, ...doc.data() })
    })

    getUsers.forEach((doc) => {
      Users.push({ id: doc.id, ...doc.data() })
    })

    getBlogs.forEach((doc) => {
      Blogs.push({ id: doc.id, ...doc.data() })
    })

    let categoryCounts = {}

    getCategory.forEach((doc) => {
      Blogs.forEach((item) => {
        const categoryId = item.category
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
  } catch (e) {
    console.error('Error fetching data: ', e)
  }
  return { Blogs, Users, Tags, Categories }
}
