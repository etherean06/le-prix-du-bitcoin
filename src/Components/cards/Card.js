import React from 'react'
import "./card.css"


export default function Card(props) {
    const {name, desc} = props
    return (
        <div className="flex-card">
            <div className="card">
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
