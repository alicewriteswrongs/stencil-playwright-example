import { expect } from '@playwright/test';
import { matchers, createStencilPlaywrightConfig } from '@stencil/playwright';

// Add custom Stencil matchers to Playwright assertions
expect.extend(matchers);

export default createStencilPlaywrightConfig({
  // Overwrite Playwright config options here
});
