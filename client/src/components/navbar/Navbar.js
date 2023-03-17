import { Link } from "react-router-dom";
import "./Navbar.scss";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className="logo" to="/">Primavera</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Menu</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Reservation</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Our Location</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon className="navIcon" />
                        <PersonOutlineIcon className="navIcon" />
                        <FavoriteBorderOutlinedIcon className="navIcon" />
                        <div className="deliveryIcon">
                            <ShoppingCartIcon className="navIcon" />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Navbar;