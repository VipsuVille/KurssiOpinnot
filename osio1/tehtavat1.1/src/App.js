import React from 'react'

  const Header = (props) => {
    console.log(props.course)
    return <h1>{props.course}</h1>
  }

  const Content = (props) => {
    console.log(props.parts)
    return (<div>{props.parts[0]}</div>)
  }
  const Total = (props) => {
    console.log(props.parts[0].exercises)

   return (<div> {props.parts[0]}</div>)
  }
const App = () => {
  const course = {
    name: 'Half Stack applicati]on development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
  }
  ,{
    name: 'Using props to pass data',
    exercises: 7
  }
   ,{
    name: 'State of a component',
    exercises: 14
  }
    
  ]
}

  return( 
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
  }
export default App;
