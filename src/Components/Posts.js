import { React } from 'react'
import Post from './Post'

export default function Posts({ posts, onDelete }) {

  return (
      
    <>
        {posts.map((post) => (
            <Post key={post.id} post={post} onDelete={onDelete} />
        ))}
    </>
  )
}
