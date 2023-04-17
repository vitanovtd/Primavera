import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Cart from "../Cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {

    const meals = useSelector(state => state.cart.meals);



    const [open, setOpen] = useState(false);



    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <Link className="logo" to="/">Primavera</Link>
                    </div>
                </div>
                <div className="right" >
                    <div className="item">
                        <NavLink className="link" to="/">Home</NavLink>
                    </div>
                    <div className="item">
                        <NavLink className="link" to="/menu/5">Menu</NavLink>
                    </div>
                    {/* <div className="item">
                        <NavLink className="link" to="/">Reservation</NavLink>
                    </div> */}
                    <div className="item">
                        <NavLink className="link" to="/contact">Contact us</NavLink>
                    </div>
                    <div className="icons">
                        <SearchIcon className="navIcon" />
                        <PersonOutlineIcon className="navIcon" />
                        <FavoriteBorderOutlinedIcon className="navIcon" />
                        <div className="deliveryIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartIcon className="navIcon" />
                            <span>{meals.length}</span>
                        </div>
                    </div>
                </div>

            </div>
            {open && <Cart />}
        </div >
    )
}



export default Navbar;