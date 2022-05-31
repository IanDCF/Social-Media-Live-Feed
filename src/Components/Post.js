import { BiHeart, BiLike, BiCommentAdd, BiShareAlt, BiX } from "react-icons/bi";
import { React, useState } from 'react'
import Button from './Button'

export default function Post({ post, onDelete}) {

  const [likes, setLikes] = useState(0)

  const count = () => {
    setLikes(likes + 1)
  }

  return (
    <div className='Post'>
        <br />
        <h4>{post.content}</h4> 
        <p><BiHeart/>{likes} <BiLike/><BiCommentAdd/><BiShareAlt/><BiX/></p>
        <Button text="Like" onClick={count}/>
        <Button text= "Comment" />
        <Button text="Delete" onClick={() => onDelete(post.id)}/>
    </div>
  )
}
