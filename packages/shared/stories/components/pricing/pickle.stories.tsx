import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PricingCard } from '../../../components/pricing/pickle'
import { IntlProvider } from '../../../providers/intl'

export default {
  component: PricingCard
} as ComponentMeta<typeof PricingCard>

const Template: ComponentStory<typeof PricingCard> = (args) => (
  <IntlProvider locale="en" now={new Date()}>
    <PricingCard {...args} />
  </IntlProvider>
)

export const Primary = Template.bind({})

Primary.args = {
  item: {
    collaborators: 10,
    events: 10,
    id: 'free',
    name: 'Free',
    price: 0,
    users: 10,
    views: 10,
    visible: true
  }
}
