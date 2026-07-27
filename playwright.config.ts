import { defineConfig, devices } from '@playwright/test';
import { ConfigManager } from './utils/ConfigManager';

ConfigManager.loadEnvironment();
export default defineConfig({
  testDir: './tests',

  // Maximum time one test can run
  timeout: 60 * 1000,

  // Maximum time for assertions
  expect: {
    timeout: 10 * 1000,
  },

  // Run tests in parallel
  fullyParallel: true,

  // Prevent test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: process.env.CI ? 2 : 1,

  // Number of workers
  workers: process.env.CI ? 1 : undefined,

  // Reports
  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['list']
  ],

  use: {
    // We'll replace this with .env in the next lesson
    baseURL: ConfigManager.baseURL,

    headless: ConfigManager.headless,

    viewport: {
      width: 1920,
      height: 1080,
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 15000,

    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/auth.setup.spec.ts',
    },
    {
      name: 'guest',
      use: {
        ...devices['Desktop Chrome'],
       },
      testMatch:[
        '**/smoke/**/*.spec.ts',
      ],
    },

    {
      name: 'authenticated',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
      testMatch: [
        '**/regression/**/*.spec.ts',
        '**/api/**/*.spec.ts',
      ],
      testIgnore: '**/auth.setup.spec.ts',
    },

/*   {
    name: 'Firefox',
    use: {
      ...devices['Desktop Firefox'],
    },
  },

  {
    name: 'WebKit',
    use: {
      ...devices['Desktop Safari'],
    },
  }, */
],

  outputDir: 'test-results',
});