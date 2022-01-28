import React from "react";
import ReactDOM from "react-dom";
import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import AddItem from './AddItem.js';
function App() {

    const [itemTracker, setItemTracker] = React.useState(0);
    return(
        <>
        <Navbar itemCount = {itemTracker} />
        <Gallery />
        <About />
        <AddItem itemCount = {itemTracker} />
        </>
    );
}

export default App;