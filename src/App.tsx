import React from "react"
import { useDispatch } from "react-redux"
import { fetchRequested } from "./actions"
import "./App.css"

function App() {
  const dispatch = useDispatch()
  dispatch(fetchRequested())

  return <div className="App">Hi</div>
}

export default App
