import React from 'react';
import data from './data.js'

function ThumbnailGallery(props) {

    return (
        <section className="thumbnail-gallery">
                <img
                    onClick={props.thumbnailSwitch}
                    style={props.style1}
                    id='prod-1' 
                    src={data.thumbnailImages[0]}  
                    alt="" />

                <img
                    onClick={props.thumbnailSwitch}
                    style={props.style2}
                    id='prod-2' 
                    src={data.thumbnailImages[1]} 
                    alt="" />

                <img 
                    onClick={props.thumbnailSwitch}
                    style={props.style3}
                    id='prod-3' 
                    src={data.thumbnailImages[2]} 
                    alt="" />

                <img 
                    onClick={props.thumbnailSwitch}
                    style={props.style4}
                    id='prod-4' 
                    src={data.thumbnailImages[3]} 
                    alt="" />
            </section>
    )
}

export default ThumbnailGallery;