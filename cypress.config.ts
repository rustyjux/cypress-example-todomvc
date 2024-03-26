import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "vgydv3",
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8888',
  },
})
