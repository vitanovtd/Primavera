import './CardMeal.scss';
import { Link } from 'react-router-dom';

const CardMeal = ({ item }) => {
    return (
        <Link className='link' to={`/meal/${item.id}`}>
            <div className='cardMeal'>
                <div className='image'>
                    <img src={
                        process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
                    } alt='' />

                </div>
                <h2>{item?.attributes.title}</h2>
                <div className='prices'>
                    <h3>{item?.attributes.price}$</h3>
                </div>
                <div className='weight'>
                    <h3>{item?.attributes.weight}gr</h3>
                </div>
                {/* <div className='weight'>
                    <h3>{item?.attributes.weight}</h3>
                </div> */}
            </div>
        </Link>
    );
}


export default CardMeal;