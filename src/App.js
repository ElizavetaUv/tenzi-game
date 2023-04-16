import React from "react"
import ReactDOM from "react-dom/client"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import "./App.css"
import Die from "./components/Die"
import Rules from "./components/Rules"

export function App() {
  const [dice, setDice] = React.useState(allNewDice)

  const [victory, setVictory] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)
    if (allHeld && allSameValue) {
      setVictory(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function handleClick() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld === false ? generateNewDie() : die
      })
    )
    if (victory) {
      setVictory(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      ></Die>
    )
  })

  return (
    <div className="App">
      <main>
        {victory && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <Rules />
        <div className="diceContainer" onClick={allNewDice}>
          {diceElements}
        </div>
        <button className="rollButton" onClick={handleClick}>
          {victory ? "New Game" : "Roll"}
        </button>
      </main>
    </div>
  )
}

export default App
