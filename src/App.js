import React from "react";
import Navbar from './Navbar.js';
import Gallery from './Gallery.js';
import About from './About.js';
import AddItem from './AddItem.js';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
    return(
        <Provider store={store}>
        <Navbar />
            <main>
            <Gallery />
            <About />
            <AddItem />
            </main>
        </Provider>
    );
}

export default App