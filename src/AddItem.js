import React from 'react';

function AddItem(props) {

   
    return (
        <section className="add-item">
            <div className="prices">
                <h1>
                    <span className="selling">$125 </span>
                    <span className="discount">50% </span>
                    <span className="original-price">$250</span>
                </h1>
            </div>

            <div className="item-counter">
                <button onClick={props.handleClickCount} className='add'><img className='add'  src="./images/icon-plus.svg" alt="" /></button>

                <div className="item-displaay"><p>{props.items}</p></div>

                <button onClick={props.handleClickCount} className="remove"><img className="remove" src="./images/icon-minus.svg" alt="" /></button>
            </div>

            <button className="add-to-cart" onClick = {props.handleClickCart}>
                <span >Add to cart</span>
            </button>
        </section>
    )
} 

export default AddItem;