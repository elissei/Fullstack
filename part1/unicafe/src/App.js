import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average  = (good - bad) / all
  const pos = (good / all) * 100

  if (all !== 0) {
    return (
      <table>
      <thead>
        <tr>
          <th><h1>statistics</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>All</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{isNaN(average) ? 0 : average}</td>
        </tr>
        <tr>
          <td>Positive</td>
          <td>{isNaN(pos) ? 0 : pos}%</td>
        </tr>
      </tbody>
    </table>
    )
  }
  return (
    <h4>No feedback given</h4>
    )
  
  
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
