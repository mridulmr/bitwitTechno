import { Blogs, Users, Tags, Categories } from '../../../models/blogs'

export function GET() {
  const data = {
    Blogs,
    Users,
    Tags,
    Categories
  }    
  return new Response(JSON.stringify(data))
}
