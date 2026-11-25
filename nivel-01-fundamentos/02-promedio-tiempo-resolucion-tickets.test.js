import test from 'node:test';
import assert from 'node:assert/strict';
import { getAverageHighPriorityTime } from './02-promedio-tiempo-resolucion-tickets.js';

test('Calcula timepo promedio de resolución en minutos de tickets', () => {
  const tickets = [
  { id: "INC-01", priority: "HIGH", resolutionMinutes: 45, resolvedBy: "AGENT_ANA" },
  { id: "INC-02", priority: "LOW", resolutionMinutes: 10, resolvedBy: "AGENT_LUIS" },
  { id: "INC-03", priority: "HIGH", resolutionMinutes: 5, resolvedBy: "BOT" },
  { id: "INC-04", priority: "HIGH", resolutionMinutes: 75, resolvedBy: "AGENT_CARLOS" },
  { id: "INC-05", priority: "MEDIUM", resolutionMinutes: 30, resolvedBy: "AGENT_ANA" }
];

  assert.equal(getAverageHighPriorityTime(tickets), 60);
});