<<<<<<< HEAD
// Re-export the base fixture from Playwright
// Override or extend test/expect here if needed
import { test as base, expect } from '@playwright/test';

export const test = base;
export { expect };
=======
// Re-export the base fixture from the package
// Override or extend test/expect here if needed
export { test, expect } from "lovable-agent-playwright-config/fixture";
>>>>>>> 9c958419bc5dbe42281cdfffad5d103810fcdbe0
