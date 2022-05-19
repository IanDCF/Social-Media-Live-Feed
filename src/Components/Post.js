import React from 'react'
import Button from './Button'

export default function Post({ post, onDelete}) {
  return (
    <div className='Post'>
        <h3>{post.content}</h3>
        <Button text="Like" />
        <Button text= "Comment" />
        <Button text="Delete" onClick={() => onDelete(post.id)}/>
    </div>
  )
}
