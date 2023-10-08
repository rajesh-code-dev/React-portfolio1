import React from 'react'
import './circle.css'
import { useState } from 'react'

function Circle() {
    
    const [transform, setTransform] = useState({x: 0, y: 0})

    window.addEventListener('mousemove', (event) => {
        const {clientX, clientY} = event
        setTransform({x: clientX, y: clientY})
        
    })

  return (
    <div id='circle' style={{transform:(`translate(${transform.x}px, ${transform.y}px)`) }}>

    </div>
  )
}

export default Circle