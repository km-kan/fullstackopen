import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, onClick }) => {
  return (
      <button onClick={onClick}>{text}</button>
  )
}

const Para = ({ text }) => {
  return (
    <div>{text}</div>
  )
}

const Votes = ({ votes }) => {
  return (
    <div>has {votes} votes</div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const newAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    const index = selected
    const newVotes = votes.map((c, i) => {
      if (i === index) {
        return c + 1
      } else {
        return c
      }
    });
    updateVotes(newVotes)
  }

  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(Array(anecdotes.length).fill(0))

  const maxValue = votes.reduce((acc, value) => {
    return (acc = acc > value ? acc : value);
  }, 0);

  const indexOfMax = votes.indexOf(maxValue)

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Para text={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button text="next anecdote" onClick={newAnecdote} />
      <Button text="vote" onClick={addVote} />
      <Header text="Anecdote with most votes" />
      <Para text={anecdotes[indexOfMax]} />
      <Votes votes={votes[indexOfMax]} />
    </div>
  )
}

export default App
