import React from 'react';
import WorksDesc from "./WorksComponents/WorksDesc";
import WorksImage from "./WorksComponents/WorksImage";
import { Works1 } from "../../assets";
import { useAppSelector } from '../../store/hooks';
import "./sectionWorks.scss";

const SectionExperience: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-experience">
            <div className="container">
                <div className="experience-inner">
                    <WorksDesc 
                    descTitle={langEN ? "the aro experience" : "опыт aro"}
                    desc={langEN ? "Aro is so much more than an app and box for you phone. It’s about what happens once you put down your phone. Aro lets parents and kids connect by creating an environment where phones aren't a distraction." : "Aro — это гораздо больше, чем приложение и коробка для вашего телефона. Это о том, что происходит, когда вы кладете телефон. Aro позволяет родителям и детям общаться, создавая среду, в которой телефоны не отвлекают."}
                    />
                    <WorksImage 
                    imageClass="experience"
                    imageSrc={Works1}
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionExperience;