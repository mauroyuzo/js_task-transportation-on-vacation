function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const SHORT_PRICE = 20;
  const LONG_PRICE = 50;

  if (days >= LONG_TERM) {
    return days * 40 - LONG_PRICE;
  } else if (days >= SHORT_TERM) {
    return days * 40 - SHORT_PRICE;
  } else {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
