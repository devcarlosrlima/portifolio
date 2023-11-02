import React from 'react'
import './button.css'

const ButtonA = ({text, link}) => {
  return (
    <div>
        <a href={link}>
          <button className='btnA'>{text}</button> 
        </a>
    </div>
  )
}

export default ButtonA