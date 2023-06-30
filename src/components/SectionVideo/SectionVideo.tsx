import React from 'react';
import { FaPlay } from "react-icons/fa"
import { useAppSelector } from '../../store/hooks';
import "./sectionVideo.scss";

const SectionVideo: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="sectoin-video">
            <div className="container">
                <div className="video-inner">

                    <h1>{langEN ? "See Aro in Action" : "Увидеть Aro в действии"}</h1>

                    <p>{langEN ? "Aro helps families put down their phones to connect, relax, and recharge." : "Aro помогает семьям отложить телефоны, чтобы пообщаться, расслабиться и подзарядиться."}</p>

                    <div className="video-button">
                        <button><FaPlay /></button>
                        <div className="video-duration">
                            <h2>{langEN ? "watch now" : "Смотреть"}</h2>
                            <span>01:25</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionVideo;