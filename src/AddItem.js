import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { actions } from './store/store';
 function AddItem(props) {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(actions.add())
    };
    const remove = () => {
        dispatch(actions.remove())
    }
   
    return (
        <section className="add-item">
            <div className="prices">
                    <h1 className="selling">$125 </h1>
                    <h2 className="discount">50% </h2>
                    <h3 className="original-price">$250</h3>
            </div>

            <div className="item-counter">
                <button onClick={add} className='add'><img className='add'  src="./images/icon-plus.svg" alt="" /></button>

                <div className="item-displaay"><p>{counter}</p></div>

                <button onClick={remove} className="remove"><img className="remove" src="./images/icon-minus.svg" alt="" /></button>
            </div>

            <button className="add-to-cart" onClick = {props.handleClickCart}>
                <span >Add to cart</span>
            </button>
        </section>
    )
} 

export default AddItem;