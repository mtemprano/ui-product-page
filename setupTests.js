import "regenerator-runtime/runtime"

// Polyfill for testing
const fetch = require("node-fetch")
window.fetch = fetch;