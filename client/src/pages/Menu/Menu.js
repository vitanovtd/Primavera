import "./Menu.scss";



const Menu = () => {
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
            </div>

            <div className="right">

            </div>
        </div>
    )
}


export default Menu;