const Footer = () => {
    return(
        <footer className="flex">
            <img src="./assets/favilogo.png" alt="Little Lemon Logo" width="150px"/>
            <div>
                <ul>
                    <li className="bold">Doormat Navigation</li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Menu</a></li>
                    <li><a>Reservations</a></li>
                    <li><a>Order online</a></li>
                    <li><a>Login</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="bold">Contact</li>
                    <li><a>Address</a></li>
                    <li><a>Phone number</a></li>
                    <li><a>Email</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="bold">Social media</li>
                    <li><a>Instagram</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>Linkedin</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer