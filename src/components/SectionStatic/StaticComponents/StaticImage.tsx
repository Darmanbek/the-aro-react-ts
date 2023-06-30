import React from 'react';
import "./staticComponents.scss";

interface ImageProps {
    imageClass: string;
    imageSrc: string;
}

const Image: React.FC<ImageProps> = ({ imageClass, imageSrc }) => {
    return (
        <div className={`${imageClass}-img`}>

            <img src={ imageSrc } alt={`${imageClass} image`} />

        </div>
    )
}

export default Image;