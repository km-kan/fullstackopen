import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClick}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, count }) => {
  return (
    
    <tr>
      <td>{text}</td>
      <td>{!count ? 0 : count} {text == "positive" ? "%" : ""}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sumAll = good + neutral + bad

  if (!sumAll) {
    return <p>No feedback given</p>
  }

  return (  
    <div>
      <Header text="statistics" />
      <table>
        <tbody>
          <StatisticLine text="good" count={good} />
          <StatisticLine text="neutral" count={neutral} />
          <StatisticLine text="bad" count={bad} />
          <StatisticLine text="all" count={sumAll} />
          <StatisticLine text="average" count={(good - bad) / sumAll} />
          <StatisticLine text="positive" count={(good / sumAll) * 100} />
          </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral  = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const sumAll = good + neutral + bad

  return (
    <div>
      <Header text="give feedback" />
      <Button text="good" onClick={increaseGood} />
      <Button text="neutral" onClick={increaseNeutral} />
      <Button text="bad" onClick={increaseBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
