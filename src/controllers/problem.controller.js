const {StatusCodes} = require('http-status-codes');
const notImplemented = require('../errors/notImplemented.error');
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.status(StatusCodes.OK).json({
        message: "Problem controller is up!"
    });
}

async function addProblem(req, res, next) {
    try {
        console.log("Incoming req body", req.body);
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created a problem",
            error: {},
            data: newProblem
        });

    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res) {
    try {
        // Not implemented
        throw new notImplemented('Get all problems');
    } catch (error) {
        next(error);
    }
}



async function getProblems(req, res) {
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched all problems",
            error: {},
            data: problems
        });
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