interface FormattedPriceProps {
  price: number
  className?: string
}

function FormattedPrice({ price, className }: FormattedPriceProps) {
  const formattedPrice = new Number(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  })
  return <span className={className}>{formattedPrice}</span>
}

export { FormattedPrice }
