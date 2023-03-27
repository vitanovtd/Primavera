import './CardMeal.scss';
import { Link } from 'react-router-dom';

const CardMeal = ({ item }) => {
    return (
        <Link className='link' to={`/meal/${item.id}`}>
            <div className='cardMeal'>
                <div className='image'>
                    <img src='' alt='' />
                    <img src='' alt='' />
                </div>
                <div className='prices'>

                </div>
                <div className='weight'>

                </div>
            </div>
        </Link>
    );
}


export default CardMeal;