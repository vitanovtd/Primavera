import "./Meal.scss";
import { useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Meal = () => {


    const [quantity, setQuantity] = useState(1);



    return (
        <div className="meal">
            <div className="left">
                <div className="images">
                    <img className="mainImg"
                        src="" alt=""
                    />
                </div>
            </div>
            <div className='right'>
                <h1>Title</h1>
                <span className='price'>$19</span>

                <p>Lorem ipsum dolar sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                    seddo eiusmod tempor incididunt ut labore etdolore.
                </p>
                <div className='quantity'>
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className='addBtn'>
                    <AddShoppingCartIcon /> Add To Cart
                </button>
                <div className='links'>
                    <div className='item'>
                        <FavoriteBorderIcon /> Add To Favorites
                    </div>
                    <div className='item'>
                        <BalanceIcon /> Add to compare
                    </div>
                </div>

                <div className="info">
                    <span>Dish Type: Main Dish</span>
                    <span>Tag: Spicy, Vegan</span>
                    <span >370gr</span>
                </div>
                <hr />
                <div className="info">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>
            </div>
        </div>
    )
}


export default Meal;