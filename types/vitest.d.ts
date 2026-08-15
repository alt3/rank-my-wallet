// Vitest runs with `globals: true`, so describe/it/expect/afterEach are ambient
// rather than imported. This supplies their types.
//
// Declared here as a reference rather than via tsconfig's `types` array on
// purpose: setting `types` would switch off automatic inclusion of every other
// @types package, and the app relies on the Node globals (Buffer, process).
//
// This replaces @types/jest, which used to type these by accident -- with
// Jest's signatures, not Vitest's.
/// <reference types="vitest/globals" />
