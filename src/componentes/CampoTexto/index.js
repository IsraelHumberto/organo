import React, { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

  const digitando = (e) => {
    props.aoAlterar(e.target.value)
  }


  return (
    <div className='campo-texto'>
        <label>{props.label}</label>
        <input 
        value={props.value}
        placeholder={props.placeholder} 
        required={props.required}
        onChange={digitando}
        />
    </div>
  )
}

export default CampoTexto