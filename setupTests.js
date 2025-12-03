// setupTests.js
import '@testing-library/jest-dom' // Import the Jest DOM matchers

// Polyfill for TextEncoder/TextDecoder (required by React Router DOM 7)
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder