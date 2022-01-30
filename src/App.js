import React from "react";
import ReactDOM from "react-dom";
import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import AddItem from './AddItem.js';
function App() {
const [cartAdd, setCartAdd] = React.useState(false)
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

    function addCartItems() {
        setCartAdd(!cartAdd);
    }

    function removeItems(){
        setSavedItem(0);
    }

    return(
        <>
        <Navbar 
            itemCount = {savedItem}
            cartMarker = {cartAdd}
            removeItemsHandleClick = {removeItems}
        />
        <Gallery />
        <About />
        <AddItem 
            handleClickCount = {countItems} 
            items = {savedItem}
            handleClickCart = {addCartItems}

        />
        </>
    );
}

export default App;