
function Header(){ //React functions can only return one element. Here an element is <header> but we can add sub elements.
    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="https://www.google.com">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header