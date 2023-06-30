import React from 'react';
import WhyAroComponents from './WhyAroComponents/WhyAroComponents';
import { WhyAro1, WhyAro2, WhyAro3, WhyAro4 } from "../../assets";
import "./sectionWhyAro.scss";
import { useAppSelector } from '../../store/hooks';

const SectionWhyAro: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-why-aro">
            <div className="container">
                <div className="why-aro-inner">
                    <div className="why-aro-title">
                        <h1>{langEN ? "why aro" : "почему aro"}</h1>

                        <p>{langEN ? "A positive and practical approach to putting down our phones to be more present in the moments that matter" : "Позитивный и практичный подход к тому, чтобы отложить телефоны, чтобы больше присутствовать в важные моменты."}</p>
                    </div>

                    <div className="why-aro-pluses">
                        <WhyAroComponents 
                        ImageSrc={WhyAro1}
                        descTitle={langEN ? 'Creates space from your phone' : 'Создает пространство из вашего телефона'}
                        desc={langEN ? 'Unlike other solutions designed to reduce screen time, the Aro platform combines an app and a physical device to create distance between you and your phone so you can have quality time without the distraction of your phone.' : "В отличие от других решений, предназначенных для сокращения экранного времени, платформа Aro сочетает в себе приложение и физическое устройство, чтобы создать дистанцию ​​между вами и вашим телефоном, чтобы вы могли качественно проводить время, не отвлекаясь на телефон."}
                        />
                        <WhyAroComponents 
                        ImageSrc={WhyAro2}
                        descTitle={langEN ? 'Gives you credit for intentional time' : 'Дает вам кредит на преднамеренное время'}
                        desc={langEN ? 'We live in a gamified world - badges, streaks, achievements, and filling in that daily ring. Aro gives you credit for the time you spend engaged in real life because the reward builds the habit of putting down your phone.' : 'Мы живем в игровом мире — значки, полосы, достижения и заполнение этого ежедневного круга. Аро вознаграждает вас за время, которое вы проводите в реальной жизни, потому что вознаграждение формирует привычку откладывать телефон.'}
                        />
                        <WhyAroComponents 
                        ImageSrc={WhyAro3}
                        descTitle={langEN ? 'Designed with families in mind' : 'Разработано с заботой о семьях'}
                        desc={langEN ? 'We’ve spent years researching, designing, and developing a solution to help both parents and kids. From a beautiful device Mom won’t hate on the kitchen counter to the celebratory GIFs in the app, Aro appeals to the whole family.' : 'Мы потратили годы на исследования, проектирование и разработку решения, которое поможет и родителям, и детям. От красивого устройства, которое мама не возненавидит на кухонном столе, до праздничных GIF-файлов в приложении, Аро привлекает всю семью.'}
                        />
                        <WhyAroComponents 
                        ImageSrc={WhyAro4}
                        descTitle={langEN ? 'Aspirational, yet practical' : 'Амбициозный, но практичный'}
                        desc={langEN ? 'No heavy handed approaches here. Getting rid of your phone or completely locking it away are not practical solutions. We need our phones...but maybe not at the dinner table or during a conversation. We designed Aro to fit in your everyday rhythms.' : 'Здесь нет жестких подходов. Избавляться от телефона или полностью запирать его — непрактичные решения. Нам нужны наши телефоны... но, возможно, не за обеденным столом или во время разговора. Мы разработали Aro, чтобы он соответствовал вашим повседневным ритмам.'}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWhyAro;