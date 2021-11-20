import React from "react"
import "./ListItem.css"

type ListItemProps = {
  title: string
  description: string
  price: string
  email: string
  image: string
}

const ListItem = ({ title, description, price, email, image }: ListItemProps) => {
  return (
  <div className="ListItem">
    <img className="Image" src={image} alt={title}/>
    <div className="MiddleSection">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Contact through: {email}</p>
    </div>
    <div className="Price">
      <button type="button">
        Add to favs
      </button>
      <strong>Price: {price} €</strong>
    </div>
  </div>
  )
}

ListItem.defaultProps = {}

export default ListItem
