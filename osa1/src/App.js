import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const StaticLine = (props) => {
  return (
    <tr>
  <td>{props.name} </td><td>{props.result} {props.lisa}</td>
  </tr>
  )
}
const Statics = (props) => {
  if (props.result3  === 0)
  return (
    <p>Anna palautetta!</p>
  )
  else 
    return (
      <table>
      <tbody>
      <StaticLine name = "good" result = {props.result} />
      <StaticLine name = "bad" result = {props.result1} />
      <StaticLine name = "neutral" result = {props.result2} />
      <StaticLine name = "all" result = {props.result3} />
      <StaticLine name = "positive" result = {(props.result  / props.result3 * 100).toFixed(2)} lisa = "%"   />
      <StaticLine name = "average" result = {(props.result4 / props.result3).toFixed(1)} />
      </tbody>
      </table>
)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))
  const [mostvoted, setmostvoted] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const Header = (props) => {
    return (
    <h1>{props.otsikko}</h1>
    )
  }
  
  const change = () => {
    setSelected(Math.floor(Math.random() * 7));
    
  }
  const voteGood = () => {
    setGood(good + 1)
    setAll(all +1)
    setAverage(average +1)
  }
  const voteNeutral= () => {
    setNeutral(neutral + 1)
    setAll(all +1)
  }
  const voteBad = () => {
    setBad(bad + 1)
    setAll(all +1)
    setAverage(average -1)
  }

  
  
  const voteUp = () => {
    const copy = [...votes]
    copy[selected] += 1
    var max = Math.max(...copy)
    setVotes(copy)
    setmostvoted(copy.indexOf(max))
  }
  
  return (
    
    <div>
      <Header otsikko = "Valitaan teksti" />
      <Button
      handleClick={change}
      text = "new text"
      />
       <Button
      handleClick={voteUp}
      text = "Vote THIS!"
      />
      <p>This has {votes[selected]} votes</p>

      <p><b>{anecdotes[selected]}</b></p>

      <Header otsikko = "Most Voted" />
      <p>{anecdotes[mostvoted]} votes</p>
      <Header otsikko = "Anna palautetta" />
      <Button
        handleClick={voteGood}
        text='good'
      />
      <Button
      handleClick={voteBad}
      text = "bad"
      />
      <Button
      handleClick={voteNeutral}
      text = "neutral"
      />
      <Header otsikko = "Tulokset" />
      
      <Statics result = {good}
       result1={bad} 
       result2 = {neutral}
       result3 ={all} 
       result4 = {average} 
      />
    </div>
    
  )
  }

export default App
