import React from 'react'
import ButtonB from '../objetos/ButtonB'
import './Projects.css'
import Cards from '../objetos/Cards'
import MovieList from '../imagem/MovieList.png'
import CalculadoraJS from '../imagem/CalculadoraJS.png'

const Projects = () => {
  return (
    <div className='Projects' id='Projects'>
      <h1>Projetos</h1>
       
      <Cards 
      tit={'Movie List'} 
      tec={'React.Js, Sass, API, Axios e JavaScript'}
      des={'Projeto feito para aperfeiçoamento de habilidades e consumo de API'}
      repo={'https://github.com/devcarlosrlima/MovieList.git'}
      site={'https://movielistdnc.vercel.app/'} 
      img={MovieList}/>
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