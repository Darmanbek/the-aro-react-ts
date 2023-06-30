import React from 'react';
import { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6 } from "../../assets";
import { useAppSelector } from '../../store/hooks';
import "./sectionFeature.scss";

const SectionFeature: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-feature">
            <div className="container">
                <div className="feature-inner">

                    <div className="feature-title">
                        <h1>{langEN ? "feature in" : "особенность в"}</h1>
                    </div>

                    <div className="feature-list">
                        <ul className="feature-items">
                            <li className="li feature-item"><a href="/"><img src={Feature1} alt="feature1 image" /></a></li>
                            <li className="li feature-item"><a href="/"><img src={Feature2} alt="feature2 image" /></a></li>
                            <li className="li feature-item"><a href="/"><img src={Feature3} alt="feature3 image" /></a></li>
                            <li className="li feature-item"><a href="/"><img src={Feature4} alt="feature4 image" /></a></li>
                            <li className="li feature-item"><a href="/"><img src={Feature5} alt="feature5 image" /></a></li>
                        </ul>

                        <a href="/"><img src={Feature6} alt="feature6 image" /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionFeature