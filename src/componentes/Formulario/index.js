import React from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Mobile',
    'Devops',
    'UX e Design'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi salvo')
  }

  return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
            <h2>Preencha seus dados</h2>
            <CampoTexto 
            label='Nome'
            placeholder='Digite seu nome'
            required={true}
            />
            <CampoTexto 
            label='Cargo'
            placeholder='Digite seu cargo'
            required={true}
            />
            <CampoTexto 
            label='Imagem'
            placeholder='Insira a url da sua foto'
            required={true}
            />
            <ListaSuspensa 
            label='Time'
            itens = {times}
            />
            <Botao>Criar Card</Botao>
        </form>
    </section>
  )
}

export default Formulario