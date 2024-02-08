const CustomersSay = () => {
    const items = [
        {
            id: 1,
            name: 'Bob',
            description: 'Comment goes here',
            rate: 5,
            img: 'https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg'
        },
        {
            id: 2,
            name: 'Sarah',
            description: 'Comment goes here',
            rate: 5,
            img: 'https://media.istockphoto.com/id/1157741177/photo/portrait-of-a-young-adult-asian-woman-in-venice.jpg?s=612x612&w=0&k=20&c=VWgnBIQMyNPF1a7mh3CFci7g_97MfoFy5jHvvElhVH8='
        },
        {
            id: 3,
            name: 'Neil',
            description: 'Comment goes here',
            rate: 4,
            img: 'https://www.shutterstock.com/image-photo/cheerful-middle-aged-caucasian-man-260nw-2053348610.jpg'
        },
    ]

    const listItems = items.map((item) => 
        <div key={item.id} className="testimonial-card padding">
            <h3>{item.name}</h3>
            <div className="flex-container">
                <img src={item.img}/>
                <p className="price rate">{item.rate}/5</p>
            </div>
            <p>{item.description}</p>
        </div>
    );

    return(
        <div className="testimonials padding">
            <div className="flex-container header padding">
                <h2>Testimonials</h2>
            </div>
            <div className="flex-container">
                {listItems}
            </div>
        </div>
    )
}

export default CustomersSay