import React from 'react';
import WorksDesc from "./WorksComponents/WorksDesc";
import WorksImage from "./WorksComponents/WorksImage";
import { Works2 } from "../../assets";
import { useAppSelector } from '../../store/hooks';
import "./sectionWorks.scss";

const SectionApp: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-app">
            <div className="container">
                <div className="app-inner">

                    <WorksImage 
                        imageClass="app"
                        imageSrc={Works2}
                    />
                    <WorksDesc 
                        descTitle={langEN ? "the aro app" : "приложение aro"}
                        desc={langEN ? "The Aro app gamifies the experience of being off your phone. The app automatically connects to the Aro Home device, measures the time you spend away from your phone, reminds you to take breaks from your phone, shows you data to improve your phone habits, and even lets you connect and compete with others." : "Приложение Aro превращает общение с телефоном в игру. Приложение автоматически подключается к устройству Aro Home, измеряет время, которое вы проводите без телефона, напоминает вам о перерывах в работе с телефоном, показывает вам данные для улучшения ваших привычек использования телефона и даже позволяет вам подключаться и соревноваться с другими."}
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default SectionApp;