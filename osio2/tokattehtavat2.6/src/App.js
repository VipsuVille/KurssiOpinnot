import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './kompo/filter'
import InputPersons from './kompo/InputPersons'
import Phonebook from './kompo/Phonebook'

const App = () => {
    const [ person, setPerson] = useState([
      { name: 'Arto Hellas' }
    ])
    const [ newName, setName ] = useState('Gimme Name')
    const [ newNumber, setNumber ] = useState('Numberino')
    const [ filter, setFiltering] = useState('')
 const hook = () => {
   console.log('tapahtu effecti')
   axios
   .get('http://restcountries.eu/rest/v2/all')
   .then(response => {
     console.log('promise täytetty') 
     setPerson(response.data)
   })
  }
  useEffect(hook, [])     
 console.log('render', person.length, ' notes')

const addNote = (event) => {
 event.preventDefault()
 
 var check = person.findIndex(el => el.name === newName)
   if (check !== -1) {
   window.alert(`${newName} is already added to phonebook`)
 } else {
 
  console.log('button clicked', event.target)
  const noteObject = {
    name: newName,
    number: newNumber,
    date: new Date().toISOString(),
    important: Math.random() > 0.5,
    id: person.length + 1,
  }
  setPerson(person.concat(noteObject))
  setName('')
  setNumber('')
  setFiltering('')
  
}
console.log(person)
}

const handleNoteChange = (event) => {

  console.log(event.target.value)
  setName(event.target.value)
}
const handleNoteChangeNumber = (event) => {
  setNumber(event.target.value)
  console.log(event.target.value)
  }
const handleIt = (event) => {
  setFiltering(event.target.value)
}

 console.log(person.content)
 console.log(person.value)
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Search</h2>
     
         <Filter filter = {filter} handleFilter = {handleIt}/>
        <h2>Add a new</h2>
        {/*<form onSubmit={addNote}> 
          <div>
            name: <input 
            value={newName}
            onChange={handleNoteChange} />
            <br />
            Number: <input 
            value={newNumber}
            onChange={handleNoteChangeNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form> */}
        <InputPersons person = {person} setPersons = {setPerson} addNote = {addNote} name = {newName} handleNoteChange = {handleNoteChange} number = {newNumber} handleNoteChangeNumber = {handleNoteChangeNumber}/>
        <h2>Numbers</h2>
       <Phonebook persons = {person} filter = {filter}/>
      </div>
    )
    }
export default App;

