const Specials = () => {
    const items = [
        {
            id: 1,
            title: 'Bruschetta',
            description: 'Bread, tomato, olive oil, garlic',
            price: 4.99,
        },
        {
            id: 2,
            title: 'Salad',
            description: 'Tomato, black olives, lettuce',
            price: 7.99,
        },
        {
            id: 3,
            title: 'Cake',
            description: 'creme, fruit, milk, butter',
            price: 4.99,
        },
    ]

    return(
        <div className="specials">
            <div className="flex-container header padding">
                <h2>Specials</h2>
                <button>Menu</button>
            </div>
            <div className="flex-container">
                <div className="special-card">
                    <img src="./assets/bruschetta.jpg" width="250px"/>
                    <div className="padding">
                        <h3>{items[0]['title']}</h3>
                        <p>{items[0]['description']}</p>
                        <p className="price">${items[0]['price']}</p>
                    </div>
                </div>
                <div className="special-card">
                    <img src="./assets/salad.jpg" width="250px"/>
                    <div className="padding">
                        <h3>{items[1]['title']}</h3>
                        <p>{items[1]['description']}</p>
                        <p className="price">${items[1]['price']}</p>
                    </div>
                </div>
                <div className="special-card">
                    <img src="./assets/creme.jpg" width="250px"/>
                    <div className="padding">
                        <h3>{items[2]['title']}</h3>
                        <p>{items[2]['description']}</p>
                        <p className="price">${items[2]['price']}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials