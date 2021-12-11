mod error;

use wasm_bindgen::prelude::*;
use js_sys::Float64Array;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(module = "@math_lib/wasm_error")]
extern "C" {
    #[wasm_bindgen(typescript_type = "MathError")]
    pub type MathError;

    #[wasm_bindgen(constructor)]
    pub fn new(msg: String) -> MathError;

    #[wasm_bindgen(typescript_type = "LogSmallError", extends = MathError)]
    pub type LogSmallError;

    #[wasm_bindgen(constructor)]
    pub fn new(msg: String) -> LogSmallError;

    #[wasm_bindgen(typescript_type = "ExpLargeError", extends = MathError)]
    pub type ExpLargeError;

    #[wasm_bindgen(constructor)]
    pub fn new(msg: String) -> ExpLargeError;
}

impl From<crate::error::MathError> for JsValue {
    fn from(err: crate::error::MathError) -> JsValue {
        MathError::new(err.to_string()).into()
    }
}

impl From<crate::error::LogSmallError> for JsValue {
    fn from(err: crate::error::LogSmallError) -> JsValue {
        LogSmallError::new(err.to_string()).into()
    }
}

impl From<crate::error::ExpLargeError> for JsValue {
    fn from(err: crate::error::ExpLargeError) -> JsValue {
        ExpLargeError::new(err.to_string()).into()
    }
}


fn log(x: f64) -> Result<f64, crate::error::LogSmallError> {
    if x < 0.01 {
        return Err(crate::error::LogSmallError(x));
    } else {
        return Ok(x.ln());
    }
}

fn exp(x: f64) -> Result<f64, crate::error::ExpLargeError> {
    if x > 10.0 {
        return Err(crate::error::ExpLargeError(x));
    } else {
        return Ok(x.exp());
    }
}

fn log_with_exp(x: f64) -> Result<(f64, f64), crate::error::MathError> {
    let log_x = log(x)?;
    let exp_x = exp(x)?;
    Ok((log_x, exp_x))
}

#[wasm_bindgen]
pub fn wasm_log(x: f64) -> Result<f64, JsValue> {
    Ok(log(x)?)
}

#[wasm_bindgen]
pub fn wasm_exp(x: f64) -> Result<f64, JsValue> {
    Ok(exp(x)?)
}

#[wasm_bindgen]
pub fn wasm_log_with_exp(x: f64) -> Result<Float64Array, JsValue> {
    let log_x = log(x)?;
    let exp_x = log(x)?;
    let out = [log_x, exp_x];
    Ok(Float64Array::from(&out[..]))
}

#[wasm_bindgen]
pub fn wasm_log_with_exp2(x: f64) -> Result<Float64Array, JsValue> {
    let (log_x, exp_x) = log_with_exp(x)?;
    let out = [log_x, exp_x];
    Ok(Float64Array::from(&out[..]))
}