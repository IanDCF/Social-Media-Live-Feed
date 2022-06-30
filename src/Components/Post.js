import { BiHeart, BiLike, BiCommentAdd, BiShareAlt, BiX } from "react-icons/bi";
import { React, useState } from 'react'
import Button from './Button'

export default function Post({ post, onDelete}) {

  const [likes, setLikes] = useState(0)

  const count = () => {
    setLikes(likes + 1)
  }

  return (
    <div className="post-container">
      <h4 className="post-content">{post.content}</h4> 
      <div className="likes">
        <p><BiHeart/>{likes}</p>
      </div>
      <div className="post-btns">
        <Button text={<BiLike/>} onClick={count}/>
        <Button text= {<BiCommentAdd/>} />
        <Button text= {<BiShareAlt/>} />
        <Button text={<BiX/>} onClick={() => onDelete(post.id)}/>
      </div>
    </div>  
  )
}
