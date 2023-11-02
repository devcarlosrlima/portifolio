import React from 'react'
import './button.css'

const ButtonB = ({text ,link}) => {
  return (
    <div>
      <a href={link}> 
        <button  className='btnB'>{text}</button> 
      </a>
    </div>
  )
}

export default ButtonB