import React from "react"
import "./index.css"

export default function Die(props) {
  return (
    <div
      className={`die ${props.isHeld ? "held" : ""}`}
      onClick={props.holdDice}
    >
      <h3 className="dieNum">{props.value}</h3>
    </div>
  )
}
