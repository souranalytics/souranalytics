import { Pricing } from '@prisma/pickle'
import millify from 'millify'
import { useIntl, useTranslations } from 'next-intl'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  item: Pricing
}

export const PricingCard: FunctionComponent<Props> = ({ className, item }) => {
  const intl = useIntl()
  const t = useTranslations()

  return (
    <div
      className={twMerge(
        'ring-2 ring-neutral-400 transition-shadow hover:ring-primary-600 w-full lg:w-60 p-4 rounded-lg',
        className
      )}>
      <div className="text-2xl font-semibold">{item.name}</div>

      <div className="flex items-center my-4">
        <div className="text-4xl font-bold tabular-nums">
          {intl.formatNumber(item.price, {
            currency: 'USD',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            style: 'currency'
          })}
        </div>
        <div className="ml-2 text-base">{t('per_month')}</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="font-medium">{t('collaborators')}</div>
        <div className="font-semibold lowercase tabular-nums">
          {millify(item.collaborators)}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="font-medium">{t('events')}</div>
        <div className="font-semibold lowercase tabular-nums">
          {millify(item.events)}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="font-medium">{t('users')}</div>
        <div className="font-semibold lowercase tabular-nums">
          {millify(item.users)}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="font-medium">{t('views')}</div>
        <div className="font-semibold lowercase tabular-nums">
          {millify(item.views)}
        </div>
      </div>
    </div>
  )
}
