import { useState, useEffect } from 'react'
import Print from './osat/Print'
import Formi from './osat/Formi'
import showPersons from './services/showPersons'


const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [numberFilter, setFilter] = useState(true)
  const [filterName, setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [goodMessage, setGoodMessage] = useState(null)


  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    if (message === errorMessage)
    return (
      <div className="error">
        {message}
      </div>
    )
    else if (message === goodMessage)
    return(
      <div className="good">
        {message}
      </div>
    )
  }

  useEffect(() => {
    showPersons
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])



  const addName = (event) => {
      event.preventDefault()
      const nameObject = {
        content: newName,
        contentNUM: newNumber,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: persons.length + 1,
      }
      
      var check1 = persons.findIndex(tarkistus=> tarkistus.content === newName && tarkistus.contentNUM != newNumber)
      var check = persons.findIndex(tarkistus=> tarkistus.content === newName)
      if (check1 !== -1) {
        if(window.confirm(`${nameObject.content} already on the list! Do you wanna change contact's number?`)) {
         
      const found = persons.find(element => element.content === newName);
          showPersons
  
  .update(found.id, nameObject)
  .then(res => {
    setPersons(persons.map(p => p.id !== found.id ? p : res))
})
    
  
  
        }
        setGoodMessage(
          ` '${nameObject.content}' new number has been ADDED`
        )
        setTimeout(() => {
          setGoodMessage(null)
        }, 5000)
        setNewName('')
        setNewNumber('')
      }
      else if (check !== -1) {
        window.alert(`${nameObject.content} already on the list!`)
      }
      else {
        showPersons
      .create(nameObject)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setNewName('')
        setGoodMessage(
        ` '${nameObject.content}' has been ADDED`
      )
      setTimeout(() => {
        setGoodMessage(null)
      }, 5000)
      })
      
    
      }
  }

  const listeneronChange = (event) => {
    setNewName(event.target.value)
  }
  const NumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const FilterList = (event) => {
    setFilterName(event.target.value)
    setFilter(false)
  }
  
const handleRemove = (id) => {
    if (window.confirm ("really wanna delete")) {
    showPersons
  .letsRemove(id)
  .then(resp => {
    setPersons(persons.filter(person => person.id !== id ))
        setErrorMessage(
      ` person has been REMOVED`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  })
  .catch(error => {
    setErrorMessage(
      ` person was already REMOVED`
    )
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
 
    setPersons(persons.filter(n => n.id !== id))
   })}
}


  const namesFiltered = numberFilter
  ? persons
  : persons.filter(person => person.content.includes(filterName))  

  return (
    <div>
       <Notification message={errorMessage} />
       <Notification message={goodMessage} />
      <h2>Phonebook</h2>
      filter: <input value={filterName} onChange = {FilterList} />
      <Formi addName = {addName} newName = {newName} newNumber = {newNumber} listeneronChange = {listeneronChange} NumberChange = {NumberChange} />
      <h2>Numbers</h2>
      <Print namesFiltered = {namesFiltered} handleRemove = {handleRemove}/>
    </div>
  )

}
export default App
