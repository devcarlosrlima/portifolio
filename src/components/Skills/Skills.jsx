import React from 'react'
import './Skills.css'
import Java from '../../assets/Image/Java.svg'
import CSS from '../../assets/Image/CSS.svg'
import react from '../../assets/Image/React.svg'
import Html5 from '../../assets/Image/HTML5.svg'

const Skills = () => {
  return (
    <div  id='Skills' className='Skills'>
      <h1>Skills</h1>
      <p>Conheça um pouco das minhas principais habilidades</p>
      <div>
        <img src={Java} alt="" />
        <img src={CSS} alt="" />
        <img src={react} alt="" />
        <img src={Html5} alt="" />
      </div>
      
    </div>
  )
}

export default Skills