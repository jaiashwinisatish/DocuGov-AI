<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:8080',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
  },
=======
import { createLovableConfig } from "lovable-agent-playwright-config/config";

export default createLovableConfig({
  // Add your custom playwright configuration overrides here
  // Example:
  // timeout: 60000,
  // use: {
  //   baseURL: 'http://localhost:3000',
  // },
>>>>>>> 9c958419bc5dbe42281cdfffad5d103810fcdbe0
});
