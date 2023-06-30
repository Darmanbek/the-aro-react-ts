import React from 'react';
import "./whyAroComponents.scss";

interface WhyAroComponentsProps {
    ImageSrc: string;
    descTitle: string;
    desc: string;
}

const WhyAroComponents: React.FC<WhyAroComponentsProps> = ({ImageSrc, desc, descTitle}) => {
    return (
        <div className="why-aro-pluses_item">
            {ImageSrc && <img src={ImageSrc} alt="why aro image" />}
            <div className="why-aro-pluses_item_desc">
                {descTitle && <h1>{descTitle}</h1>}
                {desc && <p>{desc}</p>}
            </div>
        </div>
    )
}

export default WhyAroComponents;