// Pro-rated refund for a cancelled subscription, in cents.
export function refundCents(totalCents, daysUsed, periodDays) {
  return Math.round(totalCents * (daysUsed / periodDays));
}
