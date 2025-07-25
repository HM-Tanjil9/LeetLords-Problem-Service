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

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblemById(req.params.id);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched a problem",
            error: {},
            data: problem
        });
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

async function deleteProblem(req, res, next) {
    try {
        const problem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted problem",
            error: {},
            data: problem._id
        });
    } catch (error) {
        next(error);
    }
}

async function updateProblem(req, res, next) {
    try {
        const updateProblem = await problemService.updateProblem(req.params.id, req.body);
                return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully problem updated',
            error: {},
            data: updateProblem
        });
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