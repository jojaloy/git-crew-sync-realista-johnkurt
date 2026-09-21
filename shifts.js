function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, hourlyRate) {
  const regularHoursLimit = 8;
  if (hours <= regularHoursLimit) {
    return hours * hourlyRate;
  }
  const regularPay = regularHoursLimit * hourlyRate;
  const overtimeHours = hours - regularHoursLimit;
  const overtimePay = overtimeHours * (hourlyRate * 1.5);
  return regularPay + overtimePay;
}

module.exports = { isValidShift, calculatePay };
