import React from "react";
import ReactDOM from "react-dom";
import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import AddItem from './AddItem.js';
function App() {
/*--maintaining the state of the items in the cart--*/
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
        setCartAdd(!cartAdd);
    }

    return(
        <>
        <Navbar 
            itemCount = {savedItem}
            cartMarker = {cartAdd}
            removeItemsHandleClick = {removeItems}
        />
        <main>
            
        <Gallery />
        <About />
        <AddItem 
            handleClickCount = {countItems} 
            items = {savedItem}
            handleClickCart = {addCartItems}

        />
        </main>
        </>
    );
}

export default App;