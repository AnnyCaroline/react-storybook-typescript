import React from 'react'

import TagWithMemo, { Tag } from './index'

export default {
    title: 'Tag title',
    component: Tag
}

export const Basic = () => (
    <TagWithMemo />
)

export const Second = () => (
    <TagWithMemo title="My second title" />
)
