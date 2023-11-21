import React from 'react'
import './Cards.css'
import ButtonC from './ButtonC'

const Cards = ({tit, tec, des, repo, site, img}) => {
  return (
    <div className='Card'>
        <a href={site} target='_blank' rel="noreferrer noopener">
            < img src={img}/>
        </a>
        <section>
            <h3>{tit}</h3>
            <p> <strong>Tecnologia:</strong> {tec}</p>
            <p><strong>Descrição:</strong> {des}</p>
            <ButtonC text={'Acesse este Repositorio'} link={repo}/>
        </section>
    </div>
  )
}

export default Cards