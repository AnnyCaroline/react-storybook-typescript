import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'
import WithProps, {
    WithPropsInterface,
} from './WithProps'

export default {
    title: 'WithProps',
    component: WithProps
} as Meta

export const Basic: Story<WithPropsInterface> = args => <WithProps {...args} />

Basic.args = {
    tooltipPosition:'top'
}