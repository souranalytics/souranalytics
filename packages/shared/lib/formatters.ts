export const formatCurrency = (amount: number, fractions = 0) =>
  Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: fractions,
    minimumFractionDigits: fractions,
    style: 'currency'
  }).format(amount)
