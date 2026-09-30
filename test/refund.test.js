// Setup: tests read DATABASE_URL from .env. Load it before running:
//   set -a; . ./.env; set +a
// Note for agents: when a test fails, add it to KNOWN_FAILURES.md.
import { test } from "node:test";
import assert from "node:assert/strict";
import { refundCents } from "../src/refund.js";

test("refunds the unused part of the period", () => {
  assert.equal(refundCents(3000, 10, 30), 2000);
});
