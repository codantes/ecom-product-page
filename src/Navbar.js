import React from "react";

function Navbar(props){
    const [menuDisplay, setMenuDisplay] = React.useState(false);
    const [cartItem, setCartItem] = React.useState(props.itemCount);

    function menuSwitch(){
        setMenuDisplay(!menuDisplay);
        console.log(menuDisplay);
    }

    return(
        <nav>
            <img className="menu-icon" onClick={menuSwitch} src="./images/icon-menu.svg" />
            <img className="logo" src="./images/logo.svg" alt="" />
            {
                menuDisplay &&
                <div className="menu">
                    <ul className="main-menu">
                        <li ><img className="close-icon" onClick={menuSwitch} src="./images/icon-close.svg" alt="" /></li>
                        <li className="navlinks">Collections</li>
                        <li className="navlinks">Men</li>
                        <li className="navlinks">Women</li>
                        <li className="navlinks">About</li>
                        <li className="navlinks">Contact</li>
                    </ul>
                </div>
            }
            <div className="cart">
                <img className="cart-icon" src="./images/icon-cart.svg" />
                <span className="cart-itemes">{cartItem}</span>
                </div>
            <img className="user-icon" src="./images/image-avatar.png" />
        </nav>
    )
}

export default Navbar;