import React from 'react'
import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
  return (
    <section className='formulario'>
        <form>
            <h2>Preencha seus dados</h2>
            <CampoTexto 
            label='Nome'
            placeholder='Digite seu nome'
            />
            <CampoTexto 
            label='Cargo'
            placeholder='Digite seu cargo'
            />
            <CampoTexto 
            label='Imagem'
            placeholder='Insira a url da sua foto'
            />
        </form>
    </section>
  )
}

export default Formulario