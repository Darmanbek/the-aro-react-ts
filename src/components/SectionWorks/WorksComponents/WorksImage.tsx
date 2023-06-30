import React from 'react';
import "./worksComponents.scss";

interface WorksImageProps {
    imageClass: string;
    imageSrc: string;
}

const WorksImage: React.FC<WorksImageProps> = ({imageClass, imageSrc}) => {
    return (
        <div className={`${imageClass}-img`}>

            <img src={ imageSrc } alt={`${imageClass} image`} />

        </div>
    )
}

export default WorksImage;