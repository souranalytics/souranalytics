export const formatCurrency = (amount: number, fractions = 0) =>
  Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: fractions,
    style: 'currency'
  }).format(amount)
