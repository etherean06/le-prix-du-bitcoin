import React from 'react'
import "./card.css"

export default function Card(props) {
    return (
        <div className="flex-card">
            <div className="card">
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
