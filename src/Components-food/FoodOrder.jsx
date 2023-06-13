import React, {useState, useContext, Fragment} from 'react'
import { foodItemsContext } from '../App';
import "./FoodOrder.css"
import { ErrorFunctionalBoundary } from './ErrorFunctionalBoundary';

export const FoodOrder = (props) => {
    const menuItems = useContext(foodItemsContext);
    const selectedFood = props.food;
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(selectedFood.price);
    const [isOrdered, setIsOrdered] = useState(false);
    const [isErrorcatched, setIsErrorCatched] = useState(false);

    const handleQuantityChange = (e) => {
        try{         setTotalAmount(selectedFood.price * e.target.value);
            setQuantity(e.target.value);

        }
        catch{
            setIsErrorCatched(true)
        }
    }
    const handleClick = () => {
        setIsOrdered(true);
        menuItems.map((item) => {
            if (item.id === selectedFood.id) {
                item.quantity = item.quantity- quantity
            }
        })
    }
    return (
        <Fragment>
            {!isErrorcatched && (
                <Fragment>

                <h4 className="selFoodTitle">{selectedFood.name}</h4>
            <img src={selectedFood.image} alt={selectedFood.name} className="selFoodImg" />
            <ul className="ulFoodDetails">
                <li>
                    <p className="selFoodDesc">{selectedFood.desc}</p>
                </li>
                <li>
                    <p className="selFoodPrice">${totalAmount}</p>
                </li>
                <li className="selQuantity">
                    <label>Quantity</label>
                    <input type="number" defaultValue={1} min={1} max={10} onChange={handleQuantityChange} className="quantity" />
                </li>
                <li className="liDetails">
                    <label for="name"></label>
                    <input type="text" name="name" id="name" placeholder='Your Name' className="inputFields" />
                </li>
                <li>
                    <label htmlFor=""></label>
                    <input type="text" name="mobile "  id="mobile" placeholder='Your Mobile Number' className="inputFields" />
                </li>
                <li>
                    <button className="btn btnOrder" onClick={handleClick}>Submit Order</button>
                    <button className="btn btnReturnMenu" onClick={props.returnToMenu}>Return to Menu</button>
                </li>
                {isOrdered && (
                    <li className='liMessage'>
                        <label >Order Submitted! You will receive an SMS to once ready for pickup.</label>
                    </li>
            )}
            </ul>
            
                </Fragment>
                )}
                {isErrorcatched && <ErrorFunctionalBoundary/>}
        </Fragment>
      )
    }
    