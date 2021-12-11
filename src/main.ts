import init, {wasm_log, wasm_exp, wasm_log_with_exp, wasm_log_with_exp2} from "./math_lib/pkg/math_lib";
import {MathError, LogSmallError, ExpLargeError} from "./math_lib/pkg/wasm_error"
import wasm_path from "@math_lib/math_lib_bg.wasm?url";

await init(wasm_path);

try{
  wasm_log(0.0);
} catch(e) {
  console.log("---- wasm_log ----");
  console.log(e);
  console.log(`e is instance of MathError: ${e instanceof MathError}`);
  console.log(`e is instance of LogSmallError: ${e instanceof LogSmallError}`);
  console.log(`e is instance of ExpLargeError: ${e instanceof ExpLargeError}`);
}

try{
  wasm_exp(1000);
} catch(e) {
  console.log("---- wasm_exp ----");
  console.log(e);
  console.log(`e is instance of ExpLargeError: ${e instanceof ExpLargeError}`);
}

try{
  wasm_log_with_exp(0.0);
} catch(e) {
  console.log("---- wasm_log_with_exp ----");
  console.log(e);
}

try{
  wasm_log_with_exp2(1000);
} catch(e) {
  console.log("---- wasm_log_with_exp2 ----");
  console.log(e);
}


  
