import './List.scss';
import CardMeal from '../CardMeal/CardMeal';
import useFetch from '../../hooks/useFetch';

const List = ({ sort, maxPrice, subCats, menuId }) => {

    const { data, loading, error } = useFetch(
        `/meals?populate=*&[filters][categories][id]=${menuId},${subCats.map(
            (item) => `,&[filters][sub_categories][id][$eq]=${item}`
        )}`
    );



    return (
        <div className='list'>
            {loading ? 'loading'
                : data?.map(item => (
                    <CardMeal item={item} key={item.id} />
                ))}

        </div>
    )
}

export default List;