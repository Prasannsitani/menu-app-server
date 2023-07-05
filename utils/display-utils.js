export const displayAmountUtil = (price, currency) => {
  switch (currency) {
    case 'rupee':
      return `Rs. ${price}`
    case 'dollar':
      return `$ ${price}`
    default:
      return price
  }
}
