import React from 'react'
import AnimalCard from './AnimalCard';

export default function AnimalList(props) {
    return (
        <div>
            {props.animals.map(animal =>
                <AnimalCard key={animal._id} name={animal.name} species={animal.species} image={animal.image} />
            )}
        </div>
    )
}
