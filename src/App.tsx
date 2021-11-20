import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRequested } from "./actions"
import { TopSection, ProductList, PaginationBar } from "./components"
import { getIsFetchLoading } from "./selectors"

import "./App.css"

function App() {
  const dispatch = useDispatch()
  const isFetchLoading = useSelector(getIsFetchLoading)

  useEffect(() => {
    dispatch(fetchRequested())
  }, [])

  return (
    <div className="App">
      {isFetchLoading ? (
        <span>...Loading</span>
      ) : (
        <>
          <TopSection />
          <ProductList />
          <PaginationBar />
        </>
      )}
    </div>
  )
}

export default App
