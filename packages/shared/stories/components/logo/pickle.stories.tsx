import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PickleLogo } from '../../../components/logo/pickle'

export default {
  component: PickleLogo
} as ComponentMeta<typeof PickleLogo>

const Template: ComponentStory<typeof PickleLogo> = (args) => (
  <PickleLogo {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
