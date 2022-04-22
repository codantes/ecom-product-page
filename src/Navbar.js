import React from "react";
import Basket from './Basket.js';
import {useSelector, useDispatch} from 'react-redux';
import { actions } from './store/store';

function Navbar(props){
    const counter = useSelector((state) => state.counter);

    const [menuDisplay, setMenuDisplay] = React.useState(false);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [basketDisplay, setBasketDisplay] = React.useState(false);

    function menuSwitch(){
        setMenuDisplay(!menuDisplay);
    }

    function basketSwitch(){
        setBasketDisplay(!basketDisplay);
    }

    React.useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth);
    }, []);

    return(
        <nav>
            <img className="menu-icon" onClick={menuSwitch} src="./images/icon-menu.svg" />
            <img className="logo" src="./images/logo.svg" alt="" />

            {
                (menuDisplay || screenWidth > 900) &&
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
                {((counter > 0)) && <span className="cart-itemes">{counter}</span>}
            </div>

            {basketDisplay &&

            <Basket 
                basketHandleClick = {basketSwitch}
                handleClickCart = {props.handleClickCart}
            />}
            
            <img className="user-icon" src="./images/image-avatar.png" />
        </nav>
    )
}

export default Navbar;