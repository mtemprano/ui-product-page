const { defaults } = require("jest-config")

module.exports = {
  automock: false,
  collectCoverage: true,
  coverageDirectory: "coverage",
  clearMocks: true,
  setupFiles: ["./setupTests.js"],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "./src/mocks/testUtils/setupEnv.js",
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
}
