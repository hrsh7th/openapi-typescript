import { createConfig } from "@redocly/openapi-core";
import { resolveRef } from "../src/lib/utils.js";
import { GlobalContext, TransformNodeOptions } from "../src/types.js";

/* eslint-disable @typescript-eslint/no-explicit-any */

/** Default options for all transform* functions */
export const DEFAULT_CTX: GlobalContext = {
  additionalProperties: false,
  alphabetize: false,
  arrayLength: false,
  defaultNonNullable: true,
  discriminators: {},
  emptyObjectsUnknown: false,
  enum: false,
  excludeDeprecated: false,
  exportType: false,
  immutable: false,
  injectFooter: [],
  pathParamsAsTypes: false,
  postTransform: undefined,
  redoc: await createConfig({}, { extends: ["minimal"] }),
  resolve($ref) {
    return resolveRef({}, $ref, { silent: false });
  },
  silent: true,
  transform: undefined,
};

/** Generic test case */
export type TestCase<T = any, O = TransformNodeOptions> = [
  string,
  {
    /**
     * The OpenAPI schema.  * Typing as `any` is good because it lets us test
     * any invalid or unexpected formats without fighting with TypeScript.
     */
    given: T;
    /**
     * The expected TypeScript output. Be mindful of indentation and
     * parentheses!
     */
    want: string | URL;
    /**
     * Transform options.
     */
    options?: O;
    /**
     * Options for Vitest
     */
    ci?: { timeout?: number; skipIf?: boolean };
  },
];
