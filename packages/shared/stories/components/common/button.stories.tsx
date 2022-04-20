import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '../../../components/common/button'

export default {
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Hello',
  loading: false,
  onClick: () => console.log('Hello')
}
