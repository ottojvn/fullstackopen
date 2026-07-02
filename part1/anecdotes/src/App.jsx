import { useState } from 'react'

const NextAnecdoteButton = ({ setSelected, anecdotes }) => {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }
  return (
    <button onClick={handleClick}>next anecdote</button>
  )
}

const VoteButton = ({ selected, setVotes, votes }) => {
  const handleClick = () => {
    setVotes(votes.map((voteCount, idx) => {
      if (idx === selected) {
        return voteCount + 1;
      }
      return voteCount;
    }))
  }

  return (
    <button onClick={handleClick}>vote</button>
  )
}

const MostVotedAnecdote = ({ anecdotes, votes }) => {
  const mostVoted = votes.reduce((mostVoted, currVotes, idx) => {
    return currVotes > votes[mostVoted] ? idx : mostVoted;
  }, 0)

  return <p>{anecdotes[mostVoted]}</p>
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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <VoteButton setVotes={setVotes} selected={selected} votes={votes} />
        <NextAnecdoteButton setSelected={setSelected} anecdotes={anecdotes} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <MostVotedAnecdote anecdotes={anecdotes} votes={votes} />
      </div>
    </>
  )
}

export default App