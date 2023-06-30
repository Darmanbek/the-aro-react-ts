import React from 'react';
import "./commentsComponents.scss"

interface CommentsComponentsProps {
    desc: string;
    descTitle: string;
}

const CommentsComponents: React.FC<CommentsComponentsProps> = ({desc, descTitle}) => {
    return (
        <div className="comments-desc">
            {desc && <p>{desc}</p>}
            {descTitle && <span>{descTitle}</span>}
        </div>
    )
}

export default CommentsComponents;