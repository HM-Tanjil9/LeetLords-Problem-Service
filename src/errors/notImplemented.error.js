const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotImplemented extends BaseError {
    constructor(methodName, details) {
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} not implemented`, details)
    }
}

module.exports = NotImplemented;