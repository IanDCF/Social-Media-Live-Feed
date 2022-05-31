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
    <form className="post-form" onSubmit={onSubmit}>
        <div>
            <h1 style={{fontFamily: "Helvetica"}}>Live Feed</h1>
            <p style={{fontFamily: "Helvetica"}}>___________________________________________________</p>
            <textarea value={content} onChange={(e) => setText(e.target.value)} rows='2' cols='55' placeholder="What's on your mind?"/> 
        </div>
        <Button type='submit' text='Share' />
    </form>
  )
}
