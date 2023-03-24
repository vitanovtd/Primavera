import { Link } from "react-router-dom";
import "./Restaurant.scss"

const Restaurant = () => {
    return (
        <div className="restaurant">
            <div className="container">
                <div className="left">
                    <div className="heading">
                        <h1>Discover</h1>
                        <h3>Our Restaurant</h3>
                        <span>*****</span>
                    </div>
                    <p></p>
                    <Link>Contact us</Link>
                </div>
                <div className="right">
                    <div className="imageRes">
                        <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Restaurant;