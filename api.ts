async function get<T>(
  incomingReq: Request,
  endpoint: string,
  cb: (response: Response) => Promise<T>
): Promise<T> {
  const origin = new URL(incomingReq.url).origin
  const response = await fetch(`${origin}${endpoint}`, {
    credentials: 'same-origin',
    headers: incomingReq.headers
  })
  if (!response.ok) {
    throw new Error('Fetch failed')
  }
  return cb(response)
}

export async function getBlogs(incomingReq: Request): Promise<any> {
  return get(incomingReq, '/api/blogs', async (response) => {
    if(response){
      const blogs = await response.json()    
      return blogs
    }
  })
}

export async function getBlog(incomingReq: Request, id: number): Promise<any> {
  return get(incomingReq, `/api/blogs/${id}`, async (response) => {
    const blog = await response.json()
    return blog
  })
}
