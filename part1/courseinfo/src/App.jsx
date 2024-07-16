const Header = (prop) => {
  console.log("Header here! Working well...")
  return (
    <h1>{prop.course}</h1>
  )
}

const Content = (prop) => {
  console.log("Content here! Working fine...")
  return (
    <div>
      <Part part={prop.parts[0]['name']} exercises={prop.parts[0]['exercises']} />
      <Part part={prop.parts[1]['name']} exercises={prop.parts[1]['exercises']} />
      <Part part={prop.parts[2]['name']} exercises={prop.parts[2]['exercises']} />
    </div>
  )
}

const Part = (prop) => {
  console.log("Part here! Working splendid...")
  console.log(prop.exercises)
  return (
    <p>{prop.part} {prop.exercises}</p>
  ) 
}

const Total = (prop) => {
  console.log("Total here! Working great...")
  return (
    <p>Number of exercises {prop.parts[0]['exercises'] + prop.parts[0]['exercises'] + prop.parts[0]['exercises']}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
