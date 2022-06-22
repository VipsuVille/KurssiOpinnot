import { useState, useEffect } from 'react'
import axios from 'axios'

const PrintC = (props)  => {
    if (props.array.length >= 11) {
      return(
      <p>Be more Spesific</p>
      )
    }
    
    if (props.array.length >= 2 && props.array.length <= 10)
    return(
 props.array.map( maa => 
      <li key = {maa.name.common}>{maa.name.common} <button onClick={j => props.show(props.array, maa)}>Show</button></li>)
    )
 
  if (props.array.length === 1) {
      console.log("tapahtui2")
      return (
        <ShowC array = {props.array} />
        )
    } }
 
  const ShowC = (props) => {
    return(
    props.array.map(maa => 
          <div>
          <h1>{maa.name.common}</h1>
          <p>{maa.capital}</p>
          <p>{maa.area}</p>
          <h2>Languages</h2>
          <ul>{Object.values(maa.languages).map((j, key) =>
            <li key = {key}><b>{j}</b></li> )}
          </ul>
          <img src = {maa.flags.png} />
          </div>
  ))}
  
const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [filterCountry, setCountry] = useState('')
  const [CountryFiltered, setCountryFiltered] = useState(true)
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        
      })
      
  }, [])
  const namesFiltered = CountryFiltered
  ? persons
  : persons.filter(person => person.name.common.includes(filterCountry))
const FilterList = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
    setCountryFiltered(false)
  }
  
  const showall = (a,maa) => {
    //setPersons(persons.filter(j => j.name.common = maa.name.common)
    setCountry(maa.name.common)
  
  }
console.log({persons})
  return (
    <div>
      <h1>Notes</h1>
      filter: <input value={filterCountry} onChange = {FilterList} />
      <ul>
        <PrintC array = {namesFiltered} show = {showall} />
      </ul>
    </div>
  )
}
export default App;
