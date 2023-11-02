import React from 'react'
import ButtonB from '../objetos/ButtonB'
import './Projects.css'
import Cards from '../objetos/Cards'
import Markdown from '../imagem/MARKDOWN.png'
import CalculadoraJS from '../imagem/CalculadoraJS.png'

const Projects = () => {
  return (
    <div className='Projects' id='Projects'>
      <h1>Projetos</h1>
       
      <Cards 
      tit={'Markdown'} 
      tec={'React.Js, CSS'}
      des={'Projeto feito no curso FreeCodeCamp, para dominio de Framework'}
      repo={'https://github.com/devcarlosrlima/Markdown.git'}
      site={'https://frabjous-faloodeh-5df305.netlify.app/'} 
      img={Markdown}/>
      <Cards 
      tit={'Calculadora JS'} 
      tec={'HTML, CSS, JavaScript'}
      des={'Projeto feito para certificado de JavaScript'}
      repo={'https://github.com/devcarlosrlima/Calculator-Js.git'}
      site={'https://bucolic-belekoy-b6f865.netlify.app'} 
      img={CalculadoraJS}/>
      
      <ButtonB link={'https://github.com/devcarlosrlima?tab=repositories'} text={'Acesse meu repositório completo!'}/>
    </div>
  )
}

export default Projects