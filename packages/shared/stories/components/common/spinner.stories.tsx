import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spinner } from '../../../components/common/spinner'

export default {
  component: Spinner
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Primary = Template.bind({})

Primary.args = {}
