import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Icon } from '../../../components/common/icon'

export default {
  component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Primary = Template.bind({})

Primary.args = {
  name: 'success'
}
