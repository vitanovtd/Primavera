import "./Menu.scss";
import { useState } from 'react';



const Menu = () => {

    const [maxPrice, setMaxPrice] = useState(200);
    const [sort, setSort] = useState(null);

    return (
        <div className="menu">
            <div className="left">
                <div className="filterItem">
                    <h2>Meal Category</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Salads</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Starters</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Main dishes</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="4" value={4} />
                        <label htmlFor="4">Deserts</label>
                    </div>
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
                        <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")} />
                        <label htmlFor='asc'>Price (Lowest first)</label>
                    </div>
                    <div className='inputItem'>
                        <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")} />
                        <label htmlFor='desc'>Price (Highest first)</label>
                    </div>
                </div>
            </div>

            <div className="right">
                <img className="menuImg" src="https://images.pexels.com/photos/4061560/pexels-photo-4061560.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Online delivery image" />
                <div></div>
            </div>
        </div>
    )
}


export default Menu;