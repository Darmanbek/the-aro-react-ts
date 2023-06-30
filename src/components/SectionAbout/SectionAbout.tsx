import React from 'react';
import { About } from '../../assets';
import { useAppSelector } from '../../store/hooks';
import "./sectionAbout.scss";

const SectionAbout: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-about">
            <div className="container">
                <div className="about-inner">
                    <div className="about-items">
                        <div className="about-item">
                            <h1>{langEN ? "Order your Aro" : "Закажи Aro"}</h1>
                            <div className="about-item_link">
                                <a href="/">{langEN ? "Join Aro now" : "Присоединяйтесь к Аро сейчас"}</a>
                                <a href="/">{langEN ? "FAQs" : "Часто задаваемые вопросы"}</a>
                            </div>
                        </div>
                        <div className="about-item">
                            <h1>{langEN ? "About" : "О нас"}</h1>
                            <div className="about-item_link">
                                <a href="/">{langEN ? "Our story" : "Наша история"}</a>
                                <a href="/">{langEN ? "Blog" : "Блог"}</a>
                            </div>
                        </div>
                        <div className="about-item">
                            <h1>{langEN ? "Contact" : "Контакт"}</h1>
                            <div className="about-item_link">
                                <a href="/">{langEN ? "Contact us" : "Связаться с нами"}</a>
                                <a href="/">{langEN ? "Support" : "Поддерживать"}</a>
                            </div>
                        </div>
                        <div className="about-item">
                            <h1>{langEN ? "Subscribe" : "Подписаться"}</h1>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={About} alt="about image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAbout;