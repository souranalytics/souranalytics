import { ComponentMeta, ComponentStory } from '@storybook/react'

import { SourAnalyticsLogo } from '../../../components/logo/sour-analytics'

export default {
  component: SourAnalyticsLogo
} as ComponentMeta<typeof SourAnalyticsLogo>

const Template: ComponentStory<typeof SourAnalyticsLogo> = (args) => (
  <SourAnalyticsLogo {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
