import React from 'react'

const Person = ({ person, handleRemove }) => {
    console.log(person) 
    return (
        <li>
            { console.log("ASÖLDKLASDKLÖASKLDÖKLÖ3K2131232") }
            {person.name} {person.number} <button onClick={() => handleRemove(person.id)}>Deletoi</button> 
            { console.log("sIPULI!") }
        </li>
    )
}

export default Person