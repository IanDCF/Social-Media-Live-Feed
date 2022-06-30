import { React, useState } from 'react'
import Button from './Button'

export default function SharePost({ onShare }) { 

  const [content, setText] = useState('')
  

  const onSubmit = (e) => {
    // Prevent a browser reload / refresh
    e.preventDefault()
    // Detect post content
    if(!content) {
        alert('No text detected.')
    }
    
    // Pass in text into onShare function on App.js
    onShare({ content })
    // Clear text field
    setText('')
  }

  return (
    <div className="sharepost-container"> 
      <h1 className="header" style={{fontFamily: "Helvetica"}}>Live Feed</h1>
      <form className="sharepost-form" onSubmit={onSubmit}>
          <div>
              <textarea className="textarea" value={content} onChange={(e) => setText(e.target.value)} rows='4' cols='55' placeholder="What's on your mind?"/> 
          </div>
          <div className="post-btn">
           <Button type='submit' text='Post' />
          </div>
          
      </form>
    </div>
  )
}
