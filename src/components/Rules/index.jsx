import React from "react"
import "./index.css"

export default function Die(props) {
  return (
    <div>
      <h1 className="title">Tenzi</h1>
      <p className="rules">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
    </div>
  )
}
