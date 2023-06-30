import React from "react";
import { Intro } from "../../assets"
import { useAppSelector } from "../../store/hooks";
import "./sectionIntro.scss";

const SectionIntro: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-intro">
            <div className="container">
                <div className="intro-inner">
                    <div className="intro-desc">
                        <div className="intro-desc_title">
                            <h1>{langEN ? "introducing aro" : "представление aro"}</h1>

                            <p>
                                {langEN ? "Aro is the first in-home digital wellbeing solution designed for families. The Aro platform ensures you don’t miss out on what’s most important by making it easy for everyone to put down their phones and be fully present." : "Aro — первое домашнее цифровое решение для благополучия семьи. Платформа Aro гарантирует, что вы не пропустите самое важное, позволяя всем легко отложить свои телефоны и полностью присутствовать."}
                            </p>
                        </div>

                        <div className="intro-desc_buttons">
                            <button className="aro-button">{langEN ? "join now" : "Присоединяйся сейчас"}</button>
                            <a href="/" className="aro-link">{langEN ? "how it works" : "как это работает"}</a>
                        </div>

                    </div>
                    <div className="intro-img">
                        <img src={Intro} alt="intro image" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default SectionIntro;
