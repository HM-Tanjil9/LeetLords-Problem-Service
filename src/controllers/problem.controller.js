const {StatusCodes} = require('http-status-codes');
const notImplemented = require('../errors/notImplemented.error');

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        message: "Problem controller is up!"
    });
}

function addProblem(req, res, next) {
    try {
        // Not implemented
        throw new notImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    try {
        // Not implemented
        throw new notImplemented('Get Problem');
    } catch (error) {
        next(error);
    }
}



function getProblems(req, res) {
    try {
        // Not implemented
        throw new notImplemented('Get all problems');
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    try {
        // Not implemented
        throw new notImplemented('Delete Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
    try {
        // Not implemented
        throw new notImplemented('Update Problem');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController,
}