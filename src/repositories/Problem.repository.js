const {ProblemModel} = require('../models');
const NotFound = require('../errors/notFound.error');
const logger = require('../config/logger.config');
 
class ProblemRepository {
    async createProblem(problemData) {
        try {
            const newProblem = await ProblemModel.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            });
            return newProblem;
        } catch(err) {
            console.log(err);
            throw err;
            
        }
    }

    async getAllProblems() {
        try {
            const problems = await ProblemModel.find({});
            return problems;
        } catch(err) {
            console.log(err);
            throw err;
        }
    }

    async getProblemById(id) {
        try {
            const problem = await ProblemModel.findById(id);
            if(!problem) {   
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch(err) {
            console.log(err);
            throw err;
        }
    }

    async deleteProblem(id) {
        try {
            const result = await ProblemModel.findByIdAndDelete(id);
            if(!result) {
                logger.error(`Problem.Repository: Problem with id: ${id} not found in the db`)
                throw new NotFound("Problem", id);
            }
            return result;
        } catch(err) {
            console.log(err);
            throw err;
        }
    }

    async updateProblem(id, data) {
        try {
            const updateProblem = await ProblemModel.findByIdAndUpdate(id, data, {new: true, runValidators: true});
            if(!updateProblem) {
                throw new NotFound("Problem", id);
            }
            return updateProblem;
        } catch(err) {
            console.log(err);
            throw err;
        }
    }
}

module.exports = ProblemRepository;