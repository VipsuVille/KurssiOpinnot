import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './kompo/filter'
import InputPersons from './kompo/InputPersons'
import Phonebook from './kompo/Phonebook'
import noteService from './services/notes'
import Person from './kompo/persons'

const App = () => {
    const [ person, setPerson] = useState([
      { name: 'Arto Hellas' }
    ])
    const [ newName, setName ] = useState('Gimme Name')
    const [ newNumber, setNumber ] = useState('Numberino')
    const [ filter, setFiltering] = useState('')
    useEffect(() => {
      console.log("nyt tulee tämasdasdsa")
      noteService
      
      .getAll()
      .then(response => {
        setPerson(response)
      })
      console.log("nyt tulee tämasdasdsa2222")
    }, [])
const toggleImportance = id => {
  const note = person.find(n => n.id === id)
  const changeNote = { ...note, important: !note.important }
  console.log("nyt tulee tämasdasdsa33333")
  noteService
    .update(id, changeNote)
    .then(response => {
      setPerson(person.map(note => note.id !== id ? note : response))
        console.log('importance offf ' + id + 'needs to bwe toglet')
  })
  .catch(error => {
    alert(
      `the note '${note.content}' was already deletet from the serverino`
    )
    setPerson(person.filter(n => n.id !== id))
  })
}
console.log("nyt tulee 44444444444444444")
const addNote = (event) => {
 event.preventDefault()
 console.log("nyt tulee 5555")
 var check = person.findIndex(el => el.name === newName)
   if (check !== -1) {
   window.alert(`${newName} is already added to phonebook`)
 } else {
 
  console.log('button clicked', event.target)
  const noteObject = {
    name: newName,
    number: newNumber,
    date: new Date().toISOString(),
    important: Math.random() > 0.5
  }
  setNumber('')
  setFiltering('')


noteService
.create(noteObject)
.then(response => {
  setPerson(person.concat(response))
  setName('')
})
}
}

const Toggle = ({ note, toggleImportance}) => {
  const label = note.important ? 'make not important' : 'make important'
  console.log("nyt tulee 66666666666666")
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}> {label} </button>
    </li>
  )
}
const handleRemove = (id) => {
  console.log(id)
  if (window.confirm ("really wanna delete")) {
  noteService
.letsRemove(id)
.then(resp => {
  setPerson(person.filter(person => person.id !== id ))
})}}



const handleNoteChange = (event) => {
  console.log("nyt tulee 999999999999")
  console.log(event.target.value)
  setName(event.target.value)
}
const handleNoteChangeNumber = (event) => {
  console.log("nyt tulee 1000000000000")
  setNumber(event.target.value)
  console.log(event.target.value)
  }
const handleIt = (event) => {
  setFiltering(event.target.value)
}

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
        {/*search engine*/}
        <InputPersons person = {person} setPersons = {setPerson} addNote = {addNote} name = {newName} handleNoteChange = {handleNoteChange} number = {newNumber} handleNoteChangeNumber = {handleNoteChangeNumber}/>
        <h2>Numbers</h2>
        {/*prints person list*/}
        {console.log("sasopidopasiop")}
       <Phonebook persons = {person} filter = {filter} handleRemove = {handleRemove}/>
       {console.log("123123123213")}
        <Person person = {person} handleRemove = {handleRemove}/>
        {console.log("JKLJK12L3123")}
      </div>
      
    )
    }
  
export default App;

