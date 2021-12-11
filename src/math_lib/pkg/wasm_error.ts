export class MathError extends Error {
    constructor(...params: any[]) {
        super(...params)
        this.name = "MathError"
    }
}

export class LogSmallError extends MathError {
    constructor(...params: any[]) {
        super(...params)
        this.name = "LogSmallError"
    }
}

export class ExpLargeError extends MathError {
    constructor(...params: any[]) {
        super(...params)
        this.name = "ExpLargeError"
    }
}
 
