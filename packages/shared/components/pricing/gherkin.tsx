import { Pricing } from '@prisma/gherkin'
import millify from 'millify'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { formatCurrency } from '../../lib/formatters'

type Props = {
  className?: string
  item: Pricing
}

export const PricingCard: FunctionComponent<Props> = ({ className, item }) => (
  <div
    className={twMerge(
      'ring-2 ring-neutral-400 transition-shadow hover:ring-primary-600 w-full lg:w-60 p-4 rounded-md',
      className
    )}>
    <div className="text-2xl font-semibold">{item.name}</div>

    <div className="flex items-center my-4">
      <div className="font-mono text-4xl font-bold">
        {formatCurrency(item.price)}
      </div>
      <div className="ml-2 text-base">/ month</div>
    </div>

    <div className="flex items-center justify-between">
      <div className="font-medium">Collaborators</div>
      <div className="font-mono font-semibold lowercase">
        {millify(item.collaborators)}
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="font-medium">Plans</div>
      <div className="font-mono font-semibold lowercase">
        {millify(item.plans)}
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="font-medium">Views</div>
      <div className="font-mono font-semibold lowercase">
        {millify(item.views)}
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="font-medium">Events</div>
      <div className="font-mono font-semibold lowercase">
        {millify(item.events)}
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="font-medium">Properties</div>
      <div className="font-mono font-semibold lowercase">
        {millify(item.properties)}
      </div>
    </div>
  </div>
)
