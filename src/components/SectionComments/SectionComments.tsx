import React from 'react';
import { useAppSelector } from '../../store/hooks';
import CommentsComponents from './CommentsComponents/CommentsComponents';
import "./sectionComments.scss";

const SectionComments: React.FC = () => {
    const { langEN } = useAppSelector(state => state.lang)

    return (
        <section className="section-comments">
            <div className="container">
                <div className="comments-inner">
                    <CommentsComponents 
                    desc={langEN ? '“I don’t want my kids constantly seeing me with my head down to be normal. Aro gives us an invitation to put our phones away and allows us to be more present with each other.”' : "“Я не хочу, чтобы мои дети постоянно видели меня с опущенной головой. Аро предлагает нам убрать наши телефоны и позволяет нам больше присутствовать друг с другом.”"}
                    descTitle={langEN ? 'Shelly McIntosh, Mom of 2' : "Шелли Макинтош, мама двоих детей"}
                    />
                    <CommentsComponents 
                    desc={langEN ? '“Aro holds us accountable for the time that we spend every day. Instead of looking down at our phones, we’re looking into our kids’ eyes, we’re playing with them, and we’re shaping our family in a more loving and powerful way.”' : '“Aro возлагает на нас ответственность за время, которое мы тратим каждый день. Вместо того, чтобы смотреть в наши телефоны, мы смотрим в глаза нашим детям, мы играем с ними и формируем нашу семью более любящим и сильным образом.”'}
                    descTitle={langEN ? 'Clay McInnis, Dad of 2' : 'Клэй Макиннис, папа двоих детей'}
                    />
                    <CommentsComponents 
                    desc={langEN ? '“We’ve always had our kids keep their devices outside in the living room before they go to bed, but now our daughter loves putting her phone in Aro at night so she gets credit for her time away.”' : '“Мы всегда заставляли наших детей держать свои устройства в гостиной перед сном, но теперь наша дочь любит класть свой телефон в Аро на ночь, поэтому ей засчитывается время, проведенное вдали от дома.”'}
                    descTitle={langEN ? 'Erin Burkhalter, Mom of 2' : 'Эрин Беркхалтер, мама двоих детей'}
                    />
                </div>
            </div>
        </section>
    )
}

export default SectionComments;