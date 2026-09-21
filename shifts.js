function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, hourlyRate) {
  const regularHoursLimit = 8;
  let totalPay;
  if (hours <= regularHoursLimit) {
    totalPay = hours * hourlyRate;
  } else {
    const regularPay = regularHoursLimit * hourlyRate;
    const overtimeHours = hours - regularHoursLimit;
    const overtimePay = overtimeHours * (hourlyRate * 1.5);
    totalPay = regularPay + overtimePay;
  }
  return Math.round(totalPay);
}

module.exports = { calculatePay };