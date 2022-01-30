import React from "react";
import Basket from './Basket.js';


function Navbar(props){
    const [menuDisplay, setMenuDisplay] = React.useState(false);
    const [basketDisplay, setBasketDisplay] = React.useState(false);

    function menuSwitch(){
        setMenuDisplay(!menuDisplay);
        console.log(menuDisplay);
    }

    function basketSwitch(){
        setBasketDisplay(!basketDisplay);
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

            <div className="cart-btn" onClick={basketSwitch}>
                <img className="cart-icon" src="./images/icon-cart.svg" />
                {((props.itemCount > 0)&&(props.cartMarker == true)) && <span className="cart-itemes">{props.itemCount}</span>}
            </div>

            {basketDisplay &&

            <Basket 
                basketItems = {props.itemCount} 
                basketHandleClick = {basketSwitch}
                basketAddItemHandleClick = {props.cartMarker}
                removeItemsHandleClick = {props.removeItemsHandleClick}
            />}
            
            <img className="user-icon" src="./images/image-avatar.png" />
        </nav>
    )
}

export default Navbar;