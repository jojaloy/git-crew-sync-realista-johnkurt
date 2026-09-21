function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, hourlyRate) {
  return Math.round(hours * hourlyRate);
}

module.exports = { calculatePay };