import './navbar.css';
import Nav from 'react-bootstrap/Nav'
import { FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

const Navbar = () => {

  return (
    <nav className='nav'>
      <ul className='brand'>
        <li><a href="https://www.instagram.com/carlosrlimadev/">< FaInstagram className='icons' size={30}/></a></li>
        <li><a href="https://www.linkedin.com/in/carlos-roberto-feitosa-lima-a59019299/">< FaLinkedin className='icons' size={30}/></a></li>
        <li><a href="https://github.com/devcarlosrlima">< FaGithub className='icons' size={30}/></a></li>
      </ul>
      <ul className='nav_link'>
        <li ><Nav.Link href="#Home">Home</Nav.Link></li>
        <li><Nav.Link href="#Skills">Skills</Nav.Link></li>
        <li><Nav.Link href="#Projects">Projects</Nav.Link></li>
      </ul>
      
    </nav>
  )
  }

export default Navbar