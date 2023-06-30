import React from 'react';
import { useAppSelector } from '../../../store/hooks';
import "./worksComponents.scss";

interface WorksDesc {
    descTitle: string;
    desc: string;
}

const WorkDesc: React.FC<WorksDesc> = ({descTitle, desc}) => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <div className="works-desc">
            <div className="works-desc_title">
                {descTitle && <h1>{descTitle}</h1>}

                {desc && <p>{desc}</p>}
            </div>

            <div className="works-desc_link">
                <a href="/" className="aro-link">{langEN ? "See How it Works" : "Посмотри, как это работает"}</a>
            </div>
        </div>
    )
}

export default WorkDesc;