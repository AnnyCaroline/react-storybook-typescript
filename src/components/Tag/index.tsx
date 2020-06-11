import React, { FC } from 'react'

interface TagProps {
    title?: string;
}

export const Tag: FC<TagProps> = ({ title="My title" }) => {
    return (
        <div style={{backgroundColor: 'yellow'}}>
           {title}
        </div>
    )
}

export default React.memo(Tag)