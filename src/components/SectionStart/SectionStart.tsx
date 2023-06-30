import React from "react";
import { useAppSelector } from "../../store/hooks";
import "./sectionStart.scss";

const SectionStart: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-start">
            <div className="container">
                <div className="start-inner">
                    <div className="start-block">
                        <div className="start-block_desc">
                            <h1>{langEN ? "Aro turns screen time into family time" : "Aro превращает экранное время в семейное время"}</h1>
                            <p>{langEN ? "Aro helps families put down their phones to connect, relax, and recharge" : "Aro помогает семьям отложить телефоны, чтобы пообщаться, расслабиться и подзарядиться."}</p>
                        </div>
                        <div className="start-block_link">
                            <a href="/" className="aro-extra-link">{langEN ? "get started" : "начать"}</a>
                            <a href="/" className="aro-extra-link">{langEN ? "extra link": "дополнительная ссылка"}</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionStart;
