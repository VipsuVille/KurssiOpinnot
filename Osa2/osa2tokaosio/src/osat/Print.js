import Person from "./Person"
  const Print = ({namesFiltered, handleRemove}) => {
    console.log({namesFiltered})
    return( 
    <ul>
          {namesFiltered.map(person=>
            <Person key={person.content} name = {person.content} number = {person.number} handleRemove = {handleRemove} id = {person.id}/>
            
          )}
          
   </ul>

  )}

export default Print