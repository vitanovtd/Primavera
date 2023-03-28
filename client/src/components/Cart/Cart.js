import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


const Cart = () => {


    const data = [];

    return (
        <div className="cart">
            <h1>Items in your cart</h1>
            {data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className='details'>
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className='price'> 1 x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon
                        className='delete'

                    />
                </div>
            ))}
            <div className='total'>
                <span>SUBTOTAL</span>
                <span>$123</span>
            </div>
            <button>Proceed with checkout</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default Cart;