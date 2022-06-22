const Person = ({name,number,handleRemove, id}) => {
    return (
      <li key = {name}> {name} {number} <button onClick={() =>  handleRemove(id)}>Deletoi</button> {console.log(name)}</li>
      
    )
    
  }

  export default Person