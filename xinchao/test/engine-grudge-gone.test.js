import test from 'node:test';
import assert from 'node:assert/strict';
import { applyConversationEvent, newState } from '../src/engine.js';

test('grudge_gone 划掉还在气', () => {
  const s = newState(new Date('2026-11-03T03:00:00Z'));
  s.grudge = { cause: '这是在说谁呀', at: '2026-11-03T02:30:00Z' };
  const r = applyConversationEvent(s, { sessionId: 'w', eventId: 'e1', grudgeGone: true }, new Date('2026-11-03T03:00:00Z'));
  assert.equal(r.state.grudge, undefined);
});
