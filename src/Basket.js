import React from 'react';
import data from './data.js';
import {useSelector, useDispatch} from 'react-redux';
import { actions } from './store/store';

function Basket(props) {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const setZero = () => {
        dispatch(actions.setZero())
    }
    return(
        <section className="basket">
            <nav className="basket-nav">
                <h1>Cart</h1>
                <img className='cart-close-icon' onClick={props.basketHandleClick} src="./images/icon-close.svg" alt="" />
            </nav>

            <section className="basket-items">
                {
                    ((counter > 0) && (props.basketHandleClick)) ?

                    <div className="filled-cart">
                        <img className='thumbnail' src={data.thumbnailImages[1]} alt="" />

                        <div className="prod-sum">
                            <h1>Fall Limited Edition...</h1>
                            <p className='pricing'>$125 x {counter} <span className="total">${counter * 125}</span></p>
                        </div>

                        <img onClick={setZero} className='delete-btn' src="./images/icon-delete.svg" alt="" />
                        <button>Checkout</button>
                    </div>   :

                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                    </div>
                }
            </section>
        </section>
    );
}

export default Basket;