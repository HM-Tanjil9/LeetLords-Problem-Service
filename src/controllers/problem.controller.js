const {StatusCodes} = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badRequest.error');

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        message: "Problem controller is up!"
    });
}

function addProblem(req, res, next) {
    try {
        // Not implemented
        // throw new NotImplemented('Add Problem');
        throw new BadRequest('Problem name', {missing: ["Hello"]});
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "This service is not implemented"
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "This service is not implemented"
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "This service is not implemented"
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "This service is not implemented"
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}