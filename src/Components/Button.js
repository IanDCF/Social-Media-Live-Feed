import React from 'react'

export default function Button({ text, onClick }) {

  return (
    <button 
        className='btn' 
        style={{backgroundColor: 'steelblue', color:'white', borderRadius: '3px'}}
        onClick={onClick}
            >{text}</button>
  )
}
