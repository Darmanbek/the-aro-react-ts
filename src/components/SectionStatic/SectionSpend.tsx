import React from 'react';
import { Spend } from '../../assets';
import StaticDesc from './StaticComponents/StaticDesc';
import StaticImage from './StaticComponents/StaticImage';
import { useAppSelector } from '../../store/hooks';
import "./sectionStatic.scss";

const SectionSpend: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-spend">
            <div className="container">
                <div className="spend-inner">

                    <StaticDesc  
                        descTitle={langEN ? "Spend quality time together" : "Проводите время вместе с пользой"}
                        desc={langEN ? "We only get so much time with our kids--18 years goes by quickly. Aro helps both parents and kids put down their phones when it’s family time so you don’t look back wishing you spent more time with your family and less time on your phone." : "У нас не так много времени с детьми — 18 лет пролетают быстро. Аро помогает и родителям, и детям отложить свои телефоны, когда это семейное время, чтобы вы не оглядывались назад, жалея, что не проводили больше времени с семьей и меньше времени с телефоном."}
                        percent="75%"
                        source={langEN ? { desc: "of the time we spend with our kids in our lifetime will be spent by age 12.", source: "Source: 1000 hours outside" } : { desc: "часть времени, которое мы проводим с нашими детьми в течение нашей жизни, будет потрачено к 12 годам.", source: "Источник: 1000 часов на улице." }}
                    />

                    <StaticImage 
                        imageClass="spend"
                        imageSrc={Spend}
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default SectionSpend;