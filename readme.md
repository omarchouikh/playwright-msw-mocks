## Mocking API Requests with Playwright and MSW

This tutorial demonstrates how to mock API requests using Playwright and the Mock Service Worker (MSW) library. By mocking requests, you can simulate different API responses during your tests, making it easier to test various scenarios without relying on an actual API.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (version 12 or later)
- Playwright
- MSW

You can install Playwright and MSW by running the following command:

```bash
npm install playwright playwright-msw msw
```

## Project Structure

├── msw-handlers
│ └── handlers.ts
├── msw-worker
│ └── worker.ts
├── tests
│ └── example.spec.ts
└── package.json

- `msw-handlers/handlers.ts`: This file contains the mock API handlers defined using MSW.
- `msw-worker/worker.ts`: This file sets up the MSW worker and extends the Playwright test function with the worker and HTTP utilities.
- `tests/example.spec.ts`: This file contains the Playwright test that uses the mocked API.

## Code Explanation

- `msw-handlers/handlers.ts`: This file defines a mock API handler using MSW. The handler intercepts GET requests to the /api/v1/fruits endpoint and returns a JSON response with a 200 status code after a 500ms delay. The response contains an array with a single object representing a fruit.

- `msw-worker/worker.ts`: This file sets up the MSW worker and extends the Playwright test function with the worker and HTTP utilities. The createWorkerFixture function from playwright-msw is used to create a worker fixture based on the mock API handlers defined in handlers.ts. The extended test function can now be used in Playwright tests to access the worker and HTTP utilities.

- `tests/example.spec.ts`: This file contains the Playwright test that uses the mocked API.
