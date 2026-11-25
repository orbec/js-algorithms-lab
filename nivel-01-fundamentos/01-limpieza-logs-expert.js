export function getValidErrorTotal(logs) {
  if (!Array.isArray(logs) || logs.length === 0) return 0;

  const seenIds = new Set();
  let total = 0;

  for (const log of logs) {
    if (log.status !== "ERROR" || log.isTest) continue;
    if (seenIds.has(log.id)) continue;

    seenIds.add(log.id);
    total += log.amount;
  }

  return total;
}