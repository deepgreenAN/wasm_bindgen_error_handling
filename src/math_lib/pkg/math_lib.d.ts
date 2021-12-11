/* tslint:disable */
/* eslint-disable */
/**
* @param {number} x
* @returns {number}
*/
export function wasm_log(x: number): number;
/**
* @param {number} x
* @returns {number}
*/
export function wasm_exp(x: number): number;
/**
* @param {number} x
* @returns {Float64Array}
*/
export function wasm_log_with_exp(x: number): Float64Array;
/**
* @param {number} x
* @returns {Float64Array}
*/
export function wasm_log_with_exp2(x: number): Float64Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly wasm_log: (a: number) => number;
  readonly wasm_exp: (a: number) => number;
  readonly wasm_log_with_exp: (a: number) => number;
  readonly wasm_log_with_exp2: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
