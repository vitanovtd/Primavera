import './List.scss';
import CardMeal from '../CardMeal/CardMeal';

const List = () => {
    const data = [];
    return (
        <div className='list'>
            {data?.map(item => (
                <CardMeal item={item} key={item.id} />
            ))}

        </div>
    )
}

export default List;