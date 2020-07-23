import React from 'react'

export default function AnimalCard(props) {
    return (
        <div>
            <h1>This is my Animal {props.name}</h1>
            <h2>Species: {props.species}</h2>
            <img src={props.image} alt=''/>
        </div>
    )
}
