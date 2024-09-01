import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
 
  const filteredPosts = posts.filter((post) => post.slug !== "test-file")
  
  return <Main posts={filteredPosts} />
}
