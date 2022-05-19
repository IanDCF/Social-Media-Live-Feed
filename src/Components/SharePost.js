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
    <form className="add-form" onSubmit={onSubmit}>
        <div>
            <h1>Write a post</h1>
            <h3>Share something...</h3>
            <textarea value={content} onChange={(e) => setText(e.target.value)} rows='4' cols='30' placeholder='write your post'/> 
        </div>
        <Button type='submit' text='Share' />
    </form>
  )
}
