const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class InternalServer extends BaseError {
    constructor(details) {
        super("InternalServer", StatusCodes.INTERNAL_SERVER_ERROR, "Something wen't wrong !!", details)
    }
}

module.exports = InternalServer;