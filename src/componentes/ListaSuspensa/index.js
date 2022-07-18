import React from 'react'
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
  return (
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select>
            {props.itens.map(item => <option value="" key={item}>{item}</option>)}
        </select>
    </div>
  )
}

export default ListaSuspensa