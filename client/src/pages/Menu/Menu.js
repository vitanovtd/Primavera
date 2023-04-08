import "./Menu.scss";
import { useState } from 'react';
import List from '../../components/List/List';
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

const Menu = () => {

    const menuId = parseInt(useParams().id);
    const [maxPrice, setMaxPrice] = useState(200);
    const [sort, setSort] = useState('asc');

    const [selectedSubCats, setSelectedSubCats] = useState([]);

    const { data, loading, error } = useFetch(
        `/sub-categories?[filters][categories][id][$eq]=${menuId}`
    );

    console.log(data);


    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedSubCats(
            isChecked ? [...selectedSubCats, value]
                : selectedSubCats.filter((item) => item !== value)
        );
    };


    return (
        <div className="menu">
            <div className="left">
                <div className="filterItem">
                    <h2>Meal Category</h2>
                    {loading ? "loading" : data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>

                    ))}

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={200} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort by</h2>
                    <div className='inputItem'>
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e) => setSort("asc")} />
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='inputItem'>
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e) => setSort("desc")} />
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img className="menuImg" src="https://images.pexels.com/photos/4061560/pexels-photo-4061560.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Online delivery" />
                <List menuId={menuId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
            </div>
        </div>
    )
}


export default Menu;