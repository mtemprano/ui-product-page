import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchRequested } from "./actions"
import { TopSection, ProductList, PaginationBar, Modal } from "./components"
import { getIsFetchLoading, getShowFavouritesModal } from "./selectors"
import "./App.css"

function App(): JSX.Element {
  const dispatch = useDispatch()
  const isFetchLoading = useSelector(getIsFetchLoading)
  const showFavouritesModal = useSelector(getShowFavouritesModal)

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
          {showFavouritesModal && <Modal />}
        </>
      )}
    </div>
  )
}

export default App
