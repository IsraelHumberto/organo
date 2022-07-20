import React from 'react'
import './Card.css'

const Card = ({nome, cargo, imagem, corDeFundo}) => {
  return (
    <div className='card'>
        <div className='header' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt="" />
        </div>
        <div className='footer'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Card