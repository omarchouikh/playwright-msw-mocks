import { test as base, expect } from '@playwright/test';
import { http } from 'msw';
import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';

import handler from '../msw-handlers/handler';

const test = base.extend<{
    worker: MockServiceWorker;
    http: typeof http;
}>({
    worker: createWorkerFixture(handler),
    http
});

export { expect, test };