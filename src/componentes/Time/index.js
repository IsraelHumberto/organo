import React from 'react'
import Card from '../Card'
import './Time.css'

const Time = (props) => {
  return (
     <section className='time' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.titulo}</h3>
        <Card />
     </section>
  )
}

export default Time