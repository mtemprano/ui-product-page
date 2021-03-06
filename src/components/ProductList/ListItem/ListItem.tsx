import React, { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ExtendedProductListItem, GlobalStateInterface } from "../../../helpers"
import { addItemToFavourites, removeItemFromFavourites } from "../../../actions"
import { makeGetIsFavourite } from "../../../selectors"
import "./ListItem.css"
import classNames from "classnames"

type ListItemProps = ExtendedProductListItem & { isSimplified: boolean }

const ListItem = ({
  title,
  description,
  price,
  email,
  image,
  id,
  isSimplified,
}: ListItemProps): JSX.Element => {
  const dispatch = useDispatch()
  // The following code will create a selector instance for every component instance for proper memoization
  const memoizedMakeGetIsFavourite = useMemo(makeGetIsFavourite, [])
  const isFavourite = useSelector((state: GlobalStateInterface) =>
    memoizedMakeGetIsFavourite(state, id),
  )

  const handleAddToFavouritesClick = () => {
    dispatch(addItemToFavourites(id))
  }

  const handleRemoveFromFavouritesClick = () => {
    dispatch(removeItemFromFavourites(id))
  }

  const dynamicClasses = classNames("ListItem", { SimplifiedListItem: isSimplified })

  return (
    <div className={dynamicClasses} data-testid={isSimplified ? "list-item-simple" : "list-item"}>
      <img className="Image" src={image} alt={title} />
      <div className="MiddleSection">
        <h3 data-testid={isSimplified ? "item-title-simple" : "item-title"}>{title}</h3>
        {!isSimplified && (
          <>
            <p>{description}</p>
            <p>Contact through: {email}</p>
          </>
        )}
      </div>
      <div className="Price">
        {isFavourite ? (
          <button
            className="Button"
            type="button"
            onClick={handleRemoveFromFavouritesClick}
            data-testid={
              isSimplified ? "remove-favourites-button-simple" : "remove-favourites-button"
            }
          >
            Remove from favourites
          </button>
        ) : (
          !isSimplified && (
            <button
              className="Button"
              type="button"
              onClick={handleAddToFavouritesClick}
              data-testid="add-favourites-button"
            >
              Add to favourites
            </button>
          )
        )}
        {!isSimplified && <strong>Price: {price} ???</strong>}
      </div>
    </div>
  )
}

export default ListItem
