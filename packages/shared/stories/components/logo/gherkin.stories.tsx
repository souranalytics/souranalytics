import { ComponentMeta, ComponentStory } from '@storybook/react'

import { GherkinLogo } from '../../../components/logo/gherkin'

export default {
  component: GherkinLogo
} as ComponentMeta<typeof GherkinLogo>

const Template: ComponentStory<typeof GherkinLogo> = (args) => (
  <GherkinLogo {...args} />
)

export const Primary = Template.bind({})

Primary.args = {}
