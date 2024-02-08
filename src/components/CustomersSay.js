const CustomersSay = () => {
    const items = [
        {
            id: 1,
            name: 'Bob',
            description: 'Comment goes here',
            rate: 5,
        },
        {
            id: 2,
            name: 'Sarah',
            description: 'Comment goes here',
            rate: 5,
        },
        {
            id: 3,
            name: 'Neil',
            description: 'Comment goes here',
            rate: 4,
        },
    ]

    return(
        <div className="testimonials padding">
            <div className="flex-container header padding">
                <h2>Testimonials</h2>
            </div>
            <div className="flex-container">
                <div className="testimonial-card padding">
                    <h3>{items[0]['name']}</h3>
                    <div className="flex-container">
                        <img src="https://as1.ftcdn.net/v2/jpg/02/22/85/16/1000_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"/>
                        <p className="price rate">{items[0]['rate']}/5</p>
                    </div>
                    <p>{items[0]['description']}</p>
                </div>
                <div className="testimonial-card padding">
                    <h3>{items[1]['name']}</h3>
                    <div className="flex-container">
                        <img src="https://media.istockphoto.com/id/1157741177/photo/portrait-of-a-young-adult-asian-woman-in-venice.jpg?s=612x612&w=0&k=20&c=VWgnBIQMyNPF1a7mh3CFci7g_97MfoFy5jHvvElhVH8="/>
                        <p className="price rate">{items[1]['rate']}/5</p>
                    </div>
                    <p>{items[1]['description']}</p>
                </div>
                <div className="testimonial-card padding">
                    <h3>{items[2]['name']}</h3>
                    <div className="flex-container">
                        <img src="https://www.shutterstock.com/image-photo/cheerful-middle-aged-caucasian-man-260nw-2053348610.jpg"/>
                        <p className="price rate">{items[2]['rate']}/5</p>
                    </div>
                    <p>{items[2]['description']}</p>
                </div>
            </div>
        </div>
    )
}

export default CustomersSay