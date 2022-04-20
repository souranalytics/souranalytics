import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from '../../../components/common/input'

export default {
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
  hint: 'Hint',
  label: 'Label',
  placeholder: 'Placeholder'
}
