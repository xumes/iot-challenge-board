import React from 'react'

const DateFormat = props => {
    const data = Date(props.date).split(' ')
    
    const mes = data[1]
    const semana = data[0]
    const ano = data[3]
    const dia = data[2]
    console.log("data", data)
    return (
        <ul className='list-group'>
            <li className="list-group-item list-group-item-primary">{semana}</li>
            <li className="list-group-item list-group-item-success">{mes}</li>
            <li className="list-group-item list-group-item-warning">{ano}}</li>
            <li className="list-group-item list-group-item-info">{dia}</li>
        </ul>
    )
}

export default DateFormat