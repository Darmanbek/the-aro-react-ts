import React from 'react';
import WorksDesc from "./WorksComponents/WorksDesc";
import WorksImage from "./WorksComponents/WorksImage";
import { Works3 } from "../../assets";
import "./sectionWorks.scss";
import { useAppSelector } from '../../store/hooks';

const SectionHomeDevice: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-home-device">
            <div className="container">
                <div className="home-device-inner">

                    <WorksDesc 
                        descTitle={langEN ? "the aro home device" : "домашнее устройство aro"}
                        desc={langEN ? "It’s beautiful, designed to be seen, and packed full of technology. The Aro Home device automatically connects to your phone when it’s placed inside and starts measuring the time you spend away from your phone. Oh yeah. It charges five phones at once too." : "Он красив, создан для того, чтобы его видели, и наполнен технологиями. Устройство Aro Home автоматически подключается к вашему телефону, когда оно находится внутри, и начинает измерять время, которое вы проводите без телефона. Ах, да. Он заряжает пять телефонов одновременно."}
                    />
                    <WorksImage 
                        imageClass="home-device"
                        imageSrc={Works3}
                    />
                    
                </div>
            </div>
        </section>
    )
}

export default SectionHomeDevice;