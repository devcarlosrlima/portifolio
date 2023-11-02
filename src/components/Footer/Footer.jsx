import React from 'react'
import './Footer.css';
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  
  return (
    <div className='footer'>
      <ul>
        <li><a href="https://www.instagram.com/carlosrlimadev/">< FaInstagram className='icons' size={30}/></a></li>
        <li><a href="https://www.linkedin.com/in/carlos-roberto-feitosa-lima-a59019299/">< FaLinkedin className='icons' size={30}/></a></li>
        <li><a href="https://github.com/devcarlosrlima">< FaGithub className='icons' size={30}/></a></li>
      </ul>
      <p>dev.frontcarloslima@gmail.com</p>
      <p>Carlos Lima ©️ 2023</p>
    </div>
    
  )
}

export default Footer