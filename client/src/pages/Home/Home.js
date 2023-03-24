import Restaurant from "../../components/Restaurant/Restaurant";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";


const Home = () => {
    return (
        <div className="home">
            <Slider />
            <Restaurant />
        </div>
    )
}

export default Home;