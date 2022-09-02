import "./electron"
import React from "react"

export const App = () => {
  return (
    <div>
      {[1, 2, 3].map((number) => (
        <div key={number}>Hello</div>
      ))}
    </div>
  )
}
