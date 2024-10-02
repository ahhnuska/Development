"use client"
import React, { useEffect, useState } from 'react'

const Composition = () => {
    const[state,setState]=useState("posts1")
    console.log("clicakble");
   
    
  return (
    <div>
      <button onClick={()=>('posts')}>Posts1</button>
      <button onClick={()=>('users')}>User</button>
      <button onClick={()=>('comments')}>Comments</button>

    </div>
  )
}

export default Composition
