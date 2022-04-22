import React from 'react';
import data from './data.js';
import ThumbnailGallery from './ThumbnailGallery.js';

function Gallery() {
    const [count, setCount] = React.useState(0);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    const [styleImg1, setStyleImg1] = React.useState(true);
    const [styleImg2, setStyleImg2] = React.useState(false);
    const [styleImg3, setStyleImg3] = React.useState(false);
    const [styleImg4, setStyleImg4] = React.useState(false);


    const thumbnailStyle1 = {
        border: styleImg1 ? "3px solid orange" : "none",
        filter: styleImg1 ? "opacity(0.7)" : "opacity(1)"
    }

    
    const thumbnailStyle2 = {
        border: styleImg2 ? "3px solid orange" : "none",
        filter: styleImg2 ? "opacity(0.7)" : "opacity(1)"
    }

    
    const thumbnailStyle3 = {
        border: styleImg3 ? "3px solid orange" : "none",
        filter: styleImg3 ? "opacity(0.7)" : "opacity(1)"
    }

    
    const thumbnailStyle4 = {
        border: styleImg4 ? "3px solid orange" : "none",
        filter: styleImg4 ? "opacity(0.7)" : "opacity(1)"
    }

    React.useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener('resize', changeWidth);
    }, []);

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

    function thumbnailSwitch(event){
        let img = event.target.id;
        console.log(img);

        switch(img){
            case 'prod-1':
                setCount(0);
                setStyleImg1(true);
                setStyleImg2(false);
                setStyleImg3(false);
                setStyleImg4(false);
                break;
            
            case 'prod-2':
                setCount(1);
                setStyleImg1(false);
                setStyleImg2(true);
                setStyleImg3(false);
                setStyleImg4(false);
                break;
            
            case 'prod-3':
                setCount(2);
                setStyleImg1(false);
                setStyleImg2(false);
                setStyleImg3(true);
                setStyleImg4(false);
                break;
            
            case 'prod-4':
                setCount(3);
                setStyleImg1(false);
                setStyleImg2(false);
                setStyleImg3(false);
                setStyleImg4(true);
                break;

            default:
                setCount(0);
        }
    }
    
    return(

        <section className='gallery'>
            <section className="main-gallery">
            <button 
                id="prev-btn" 
                className='prev' 
                onClick={handleClick}
            >

                <img 
                    className='prev' 
                    src="./images/icon-previous.svg" alt="sneaker-image" 
                />

            </button>

            <img 
                className='product-img' 
                src={data.galleryImages[count]} 
            />

            <button 
                id='next-btn' 
                className='next' 
                onClick={handleClick}
            >

                <img 
                    src="./images/icon-next.svg" 
                    className='next' 
                    alt="sneaker-image"  
                />
            </button>
        </section>

        {
            (screenWidth > 900) &&

            <ThumbnailGallery
                thumbnailSwitch={thumbnailSwitch}
                style1={thumbnailStyle1}
                style2={thumbnailStyle2}
                style3={thumbnailStyle3}
                style4={thumbnailStyle4}
            />
        }

        </section>
    )
}

export default Gallery;