import "./Meal.scss";
import { useState } from "react";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Meal = () => {

    const id = useParams().id;

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const { data, loading } = useFetch(`/meals/${id}?populate=*`);




    return (
        <div className="meal">
            <div className="left">
                <div className="images">
                    <img className="mainImg"
                        src={process.env.REACT_APP_UPLOAD_URL + data?.attributes.img.data.attributes.url} alt=""
                    />
                </div>
            </div>
            <div className='right'>
                <h1>{data?.attributes.title}</h1>
                <span className='price'>{data?.attributes.price}$</span>

                <p>{data?.attributes.desc}
                </p>
                <div className='quantity'>
                    <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                    {quantity}
                    <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button className='addBtn' onClick={() => dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    img: data.attributes.img.data.attributes.url,
                    weight: data.attributes.weight,
                    price: data.attributes.price,
                    quantity
                }))}>
                    <AddShoppingCartIcon /> Add To Cart
                </button>
                <div className='links'>
                    <div className='item'>
                        <FavoriteBorderIcon /> Add To Favorites
                    </div>
                </div>

                <div className="info">
                    <span>Dish Type: {data?.attributes?.sub_categories?.data[0].attributes.title}</span>
                    <span>Tag: {data?.attributes.type}</span>
                    <span >{data?.attributes.weight}gr</span>
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