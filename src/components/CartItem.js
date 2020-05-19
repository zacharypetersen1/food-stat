import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function CartItem(props) {
  const foodCache = useSelector((state) => state.search.foodCache);
  const dispatch = useDispatch();
  
  return (
    <div className="cart-item">
      <div className="cart-item-remove" onClick={ () => dispatch(removeFromCart(props.id)) }>
        <FontAwesomeIcon icon={ faTimes } />
      </div>
      <div className="cart-item-text">
        {foodCache[props.id].description}
      </div>
      <div className="cart-item-servings">
        <Button className="servings-button">
          <FontAwesomeIcon icon={ faMinus } />
        </Button>
        <FormControl className="servings-form" />
        <Button className="servings-button">
          <FontAwesomeIcon icon={ faPlus } />
        </Button>
      </div>
    </div>
  )
}
