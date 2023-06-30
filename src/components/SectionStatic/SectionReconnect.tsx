import React from 'react';
import { Reconnect } from '../../assets';
import StaticDesc from "./StaticComponents/StaticDesc";
import StaticImage from "./StaticComponents/StaticImage";
import { useAppSelector } from '../../store/hooks';
import "./sectionStatic.scss";

const SectionReconnect: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-reconnect">
            <div className="container">
                <div className="reconnect-inner">

                    <StaticDesc 
                        descTitle={langEN ? "Reconnect with your partner": "Восстановите связь со своим партнером"}
                        desc={langEN ? "We’ve all been there. It’s the end of the day, the kids are finally asleep, and what happens? We sit down on the couch and pick up our phones rather than connect with the person right next to us. Putting your phone in Aro shows your partner you are truly present with them.​" : "Мы все были там. День подходит к концу, дети наконец уснули, и что же происходит? Мы садимся на диван и берем телефоны, вместо того чтобы связаться с человеком рядом с нами. Поместив свой телефон в Aro, вы покажете своему партнеру, что вы действительно присутствуете с ним."}
                        percent="79%"
                        source={langEN ? {desc: "of married couples admit technology distracts them from connecting with each other.", source: "Source: Lasting App."} : {desc: "супружеских пар признают, что технологии отвлекают их от общения друг с другом.", source: "Источник: прочное приложение."}}
                    />

                    <StaticImage 
                        imageClass="reconnect"
                        imageSrc={Reconnect}
                    />

                </div>
            </div>
        </section>
    )
}

export default SectionReconnect;