import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <h1>statistics</h1>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {(good - bad) / (good + neutral + bad)}</p>
    <p>positive {good / (good + neutral + bad) * 100} %</p>
  </div>
);

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (setter, value) => setter(value + 1);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => handleClick(setGood, good)}>good</button>
        <button onClick={() => handleClick(setNeutral, neutral)}>neutral</button>
        <button onClick={() => handleClick(setBad, bad)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App