import { useState } from 'react';
import './Slider.scss';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);



    const data = [
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/14030947/pexels-photo-14030947.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);

    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

    return (
        <div className='slider'>
            <div className="imgList" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt='' />
                <img src={data[1]} alt='' />
                <img src={data[2]} alt='' />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon className='dirIcon' />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon className='dirIcon' />
                </div>
            </div>
        </div >
    )


}


export default Slider;