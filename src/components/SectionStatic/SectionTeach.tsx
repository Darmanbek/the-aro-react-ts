import React from 'react';
import { Teach } from '../../assets';
import StaticDesc from './StaticComponents/StaticDesc';
import StaticImage from './StaticComponents/StaticImage';
import { useAppSelector } from '../../store/hooks';
import "./sectionStatic.scss";

const SectionTeach: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-teach">
            <div className="container">
                <div className="teach-inner">

                    <StaticImage 
                        imageClass="teach"
                        imageSrc={Teach}
                    />

                    <StaticDesc 
                        descTitle={langEN ? "Teach your kids healthy habits" : "Научите своих детей здоровым привычкам"}
                        desc={langEN ? "Giving your kids a smartphone is a stressful decision. Aro helps them develop healthy relationships with their phones, allows you to model good habits, and gives you peace of mind knowing they have the tools to be safe and successful." : "Подарить детям смартфон — стрессовое решение. Аро помогает им развивать здоровые отношения со своими телефонами, позволяет вам формировать хорошие привычки и дает вам душевное спокойствие, зная, что у них есть инструменты, чтобы быть безопасными и успешными."}
                        percent="83%"
                        source={langEN ? {desc: "of parents believe it's important to have time as a family without screens present.", source: "Source: The Genius of Play."} : {desc: "родителей считают важным проводить время всей семьей без экранов.", source: "Источник: Гений игры."}}
                    />
                        
                </div>
            </div>
        </section>
    )
}

export default SectionTeach;