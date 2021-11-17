import React from "react"
import { useDispatch } from "react-redux"
import { fetchRequested } from "./actions"
import { TopSection } from './components'
import "./App.css"

function App() {
  const dispatch = useDispatch()
  dispatch(fetchRequested())

  return <div className="App">
    <TopSection />
  </div>
}

export default App
