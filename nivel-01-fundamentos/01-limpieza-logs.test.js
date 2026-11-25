import test from 'node:test';
import assert from 'node:assert/strict';
import { getValidErrorTotal } from './01-limpieza-logs.js';

test('Calcula el total ignorando duplicados y pruebas', () => {
  const logs = [
    { id: "TX-101", status: "ERROR", amount: 500, isTest: false },
    { id: "TX-102", status: "OK", amount: 1200, isTest: false },
    { id: "TX-101", status: "ERROR", amount: 500, isTest: false },
    { id: "TX-103", status: "ERROR", amount: 300, isTest: true },
    { id: "TX-104", status: "ERROR", amount: 850, isTest: false }
  ];

  assert.equal(getValidErrorTotal(logs), 1350);
});