import React from 'react';
import { Take } from '../../assets';
import StaticDesc from './StaticComponents/StaticDesc';
import StaticImage from './StaticComponents/StaticImage';
import { useAppSelector } from '../../store/hooks';
import "./sectionStatic.scss";

const SectionTake: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-take">
            <div className="container">
                <div className="take-inner">

                    <StaticImage 
                        imageClass="take"
                        imageSrc={Take}
                    />

                    <StaticDesc 
                        descTitle={langEN ? 'Take some well-deserved "me time"' : 'Потрать заслуженное «время на себя»'}
                        desc={langEN ? "Sometimes we need to quiet the outside voices a little. Aro is your reminder that it’s OK to take some time for yourself. That could be reading a book, reflecting on the day, or even just getting a good night's sleep. You deserve it." : "Иногда нам нужно немного приглушить внешние голоса. Aro — это ваше напоминание о том, что можно уделить немного времени себе. Это может быть чтение книги, размышления о прошедшем дне или даже просто хороший ночной сон. Ты заслуживаешь это."}
                        percent="91%"
                        source={langEN ? {desc: "of adults keep their phones within an arm’s reach all day.", source: "Source: Forbes."} : {desc: "взрослых весь день держат свои телефоны на расстоянии вытянутой руки.", source: "Источник: Форбс."}}
                    />


                </div>
            </div>
        </section>
    )
}

export default SectionTake;