import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector, useDispatch } from 'react-redux';
import { removeMeal, resetCart, } from "../../redux/cartReducer";
const Cart = () => {


    const meals = useSelector(state => state.cart.meals);

    const dispatch = useDispatch();


    const totalAmount = () => {
        let total = 0;
        meals.forEach((meal) => total += meal.quantity * meal.price);
        return total.toFixed(2);
    }


    return (
        <div className="cart">
            <h1>Items in your cart</h1>
            {meals?.map(item => (
                <div className="item" key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className='price'> {item.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon
                        className='delete'
                        onClick={() => dispatch(removeMeal(item.id))}
                    />
                </div>
            ))}
            <div className='total'>
                <span>TOTAL</span>
                <span>{totalAmount()}$</span>
            </div>
            <button>Proceed with checkout</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
        </div>
    )
}

export default Cart;