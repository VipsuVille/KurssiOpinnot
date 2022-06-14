const Formi = (props) => {
return (

<form onSubmit={props.addName}>
<div>
  name: <input value={props.newName} onChange={props.listeneronChange}/>
  <p></p>
  number: <input value={props.newNumber} onChange={props.NumberChange}/>
</div>
<div>
<button type="submit">add</button> 
  
</div>
</form>
)
}
export default Formi