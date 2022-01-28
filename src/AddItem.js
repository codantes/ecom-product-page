import React from 'react';

function AddItem(props) {
    const [item, setItem] = React.useState(props.itemCount);
    const [savedItem, setSavedItem] = React.useState(0);

    function countItems(event) {
        let btn = event.target.className;
        setSavedItem(prevItem => {
            if(btn === "add"){
                return prevItem + 1;
            }
            else{
                if(prevItem == 0){
                    return prevItem;
                }
                else{
                    return prevItem - 1;
                }
            }
        });
    }

    function addToCart() {
        setItem(savedItem);
        console.log(item);
    }

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
                <button onClick={countItems} className='add'><img className='add'  src="./images/icon-plus.svg" alt="" /></button>

                <div className="item-displaay"><p>{savedItem}</p></div>

                <button onClick={countItems} className="remove"><img className="remove" src="./images/icon-minus.svg" alt="" /></button>
            </div>

            <button className="add-to-cart" onClick={addToCart}>
                <span onClick={addToCart}>Add to cart</span>
            </button>
        </section>
    )
} 

export default AddItem;