import { Link } from "react-router-dom";
import "./Navbar.scss";



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
                </div>
            </div>

        </div>
    )
}



export default Navbar;