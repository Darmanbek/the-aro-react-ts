import React from 'react';
import "./staticComponents.scss";

interface DescProps {
    descTitle: string;
    desc: string;
    percent: string;
    source: {
        desc: string;
        source: string;
    }
}

const Desc: React.FC<DescProps> = ({descTitle, desc, percent ,source}) => {
    return (
        <div className="static-desc">
            <div className="static-desc_title">
                {descTitle && <h1>{descTitle}</h1>}

                {desc && <p>{desc}</p>}
            </div>

            <div className="static-desc_percent">
                {percent && <h1>{percent}</h1>}
            </div>

            <div className="static-desc_source">
                {source && <p>{source.desc}</p>}
                {source && <span>{source.source}</span>}
            </div>
        </div>
    )
}

export default Desc;