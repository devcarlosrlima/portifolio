import React from 'react'
import './button.css'

const ButtonC = ({text ,link}) => {
  return (
    <div>
      <a href={link}> 
        <button  className='btnC'>{text}</button> 
      </a>
    </div>
  )
}

export default ButtonC