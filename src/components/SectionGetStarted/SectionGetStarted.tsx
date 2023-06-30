import React from 'react';
import { useAppSelector } from '../../store/hooks';
import "./sectionGetStarted.scss";

const SectionGetStarted: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-get-started">
            <div className="container">
                <div className="get-started-inner">
                    <div className="get-started_buttons">
                        <button className='aro-button'>{langEN ? "Get Started with Aro" : "Начните с Aro"}</button>
                        <a href="/" className="aro-extra-link">{langEN ? "extra link" : "дополнительная ссылка"}</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionGetStarted;