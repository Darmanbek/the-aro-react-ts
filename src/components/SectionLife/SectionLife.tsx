import React from 'react';
import { Life1, Life2, Life3 } from "../../assets";
import { useAppSelector } from '../../store/hooks';
import "./sectionLife.scss";

const SectionLife: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-life">
            <div className="container">
                <div className="life-inner">
                    <div className="life-images">
                        <img src={Life1} alt="" />
                        <img src={Life2} alt="" />
                    </div>
                    <div className="life-happens">
                        <div className="life-happens_title">
                            <h1>{langEN ? "Life happens off your phone" : "Жизнь происходит с вашего телефона"}</h1>
                            <p>{langEN ? "Make phone-free time a part of your daily routine." : "Сделайте свободное от телефона время частью вашей повседневной жизни."}</p>
                        </div>
                        <div className="life-happens_button">
                            <button className="aro-button">{langEN ? "join now" : "присоединяйся сейчас"}</button>
                            <a href="/" className="aro-extra-link">{langEN ? "extra link" : "дополнительная ссылка"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionLife;