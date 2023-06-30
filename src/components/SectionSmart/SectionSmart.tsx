import React from 'react';
import { useAppSelector } from '../../store/hooks';
import "./sectionSmart.scss"

const SectionSmart: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-smart">
            <div className="container">
                <div className="smart-inner">
                    <div className="smart-title">
                        <h1>{langEN ? "89% of interactions with our smartphones are self-initiated." : "89% взаимодействий с нашими смартфонами инициируются нами самими."}</h1>
                        <p>{langEN ? "Source: Dr. Maxi Heitmayer" : "Источник: д-р Макси Хейтмайер."}</p>
                    </div>
                    <div className="smart-desc">
                        <h1>{langEN ? "of people can use their phone when it's not in their hand." : "людей могут пользоваться телефоном, когда его нет в руке."}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSmart;