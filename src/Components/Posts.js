import { React } from 'react'
import Post from './Post'

export default function Posts({ posts, onDelete }) {

  return (
    <div className="posts-container">
    {posts.map((post) => (
        <Post className="post-container" key={post.id} post={post} onDelete={onDelete}/>
    ))}
    </div>
  )
}
