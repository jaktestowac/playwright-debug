import { defineConfig } from '@playwright/test';

export const AUTH_PATH = './tests/extra/ex5-session-inspection/auth.json';

export default defineConfig({
  testDir: './tests',
  timeout: 16000,
  reporter: [['html'], ['list']],
  fullyParallel: true,
  // workers: 1,
  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on',
    viewport: { width: 800, height: 600 },
  },
  projects: [
    {
      name: 'chromium',
      grepInvert: /@parent|@child1|@child2/,
    },
    // {
    //   name: 'parent',
    //   grep: /@parent/,
    // },
    // {
    //   name: 'child1',
    //   grep: /@child1/,
    //   dependencies: ['parent'],
    // },
    // {
    //   name: 'child2',
    //   grep: /@child2/,
    //   dependencies: ['parent'],
    // },
  ],
});
