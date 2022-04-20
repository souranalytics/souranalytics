import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Message } from '../../../components/common/message'

export default {
  component: Message
} as ComponentMeta<typeof Message>

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'This is an alert'
}
