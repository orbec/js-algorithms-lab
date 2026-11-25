export function getAverageHighPriorityTime(tickets) {
  if (!Array.isArray(tickets) || tickets.length === 0) return 0;

  let totalMinutes = 0;
  let validCount = 0;

  for (const { priority, resolutionMinutes, resolvedBy } of tickets) {
    if (priority !== "HIGH" || resolvedBy === "BOT") continue;

    totalMinutes += resolutionMinutes;
    validCount++;
  }

  return validCount === 0 ? 0 : totalMinutes / validCount;
}