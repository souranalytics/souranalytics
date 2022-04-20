import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NotFound } from '../../../components/common/not-found'
import { IntlProvider } from '../../../providers/intl'

export default {
  component: NotFound
} as ComponentMeta<typeof NotFound>

const Template: ComponentStory<typeof NotFound> = (args) => (
  <IntlProvider locale="en" now={new Date()}>
    <NotFound {...args} />
  </IntlProvider>
)

export const Primary = Template.bind({})

Primary.args = {}
