import React from 'react';

function Gallery() {

    const [count, setCount] = React.useState(0);


    //array for all gallery images
    const images = [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg"
    ];

    function handleClick(event) {
        let btn = event.target.className;
        console.log(btn);
        setCount(prevCount => {
            if(btn === "next"){
                if(prevCount == 3){
                    return prevCount - 3;
                }
                else{
                    return prevCount + 1;
                }
            };

            if(btn === "prev"){
                if(prevCount == 0){
                    return prevCount + 3;
                }
                else{
                    return prevCount - 1;
                }
            };
        } );
    }

    return(

        <section className='gallery'>
            <button id="prev-btn" className='prev' onClick={handleClick}>
                <img className='prev' src="./images/icon-previous.svg" alt="sneaker-image" />
            </button>

            <img src={images[count]} />

            <button id='next-btn' className='next' onClick={handleClick}>
                <img src="./images/icon-next.svg" className='next' alt="sneaker-image"  />
            </button>
        </section>
    )
}

export default Gallery;