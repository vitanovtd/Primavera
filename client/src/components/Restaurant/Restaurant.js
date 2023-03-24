import { Link } from "react-router-dom";
import "./Restaurant.scss"

const Restaurant = () => {
    return (
        <div className="restaurant">
            <div className="resume">
                <div className="left">
                    <div className="heading">
                        <h1>Discover</h1>
                        <h3>Our Restaurant</h3>
                        <span>*****</span>
                    </div>
                    <p> "At vero eos et accusamus et iusto odio
                        dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        Et harum quidem rerum facilis est et expedita distinctio.</p>
                    <Link className="link" to={"/contact"}>Contact us</Link>
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