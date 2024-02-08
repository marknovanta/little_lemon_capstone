const Specials = () => {
    const items = [
        {
            id: 1,
            title: 'Bruschetta',
            description: 'Bread, tomato, olive oil, garlic',
            price: 4.99,
            img: './assets/bruschetta.jpg',
        },
        {
            id: 2,
            title: 'Salad',
            description: 'Tomato, black olives, lettuce',
            price: 7.99,
            img: './assets/salad.jpg',
        },
        {
            id: 3,
            title: 'Cake',
            description: 'creme, fruit, milk, butter',
            price: 4.99,
            img: './assets/creme.jpg',
        },
    ]

    const listItems = items.map((item) =>
        <div key={item.id} className="special-card">
            <img src={item.img} width="250px"/>
            <div className="padding">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="price">${item.price}</p>
            </div>
        </div>
    );

    return(
        <div className="specials">
            <div className="flex-container header padding">
                <h2>Specials</h2>
                <button>Menu</button>
            </div>
            <div className="flex-container">
                {listItems}
            </div>
        </div>
    )
}

export default Specials