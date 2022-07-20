import React, { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('Programação')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('Programação')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha seus dados</h2>
        <CampoTexto
          label='Nome'
          placeholder='Digite seu nome'
          required={true}
          value={nome}
          aoAlterar={value => setNome(value)}
        />
        <CampoTexto
          label='Cargo'
          placeholder='Digite seu cargo'
          required={true}
          value={cargo}
          aoAlterar={value => setCargo(value)}
        />
        <CampoTexto
          label='Imagem'
          placeholder='Insira a url da sua foto'
          required={true}
          value={imagem}
          aoAlterar={value => setImagem(value)}
        />
        <ListaSuspensa
          label='Time'
          itens={props.nomesTimes}
          value={time}
          aoAlterar={value => setTime(value)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario