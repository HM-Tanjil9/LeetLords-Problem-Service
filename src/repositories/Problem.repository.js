const {ProblemModel} = require('../models');

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
            throw(err);
        }
    }
}

module.exports = ProblemRepository;