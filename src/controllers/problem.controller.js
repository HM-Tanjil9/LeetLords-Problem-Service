const {StatusCodes} = require('http-status-codes');

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        message: "Problem controller is up!"
    });
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "This service is not implemented"
    });
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