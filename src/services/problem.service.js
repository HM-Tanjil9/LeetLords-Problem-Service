const sanitizeMarkdownContent = require('../utils/markdownSanitizer')

class ProblemService {
    constructor(ProblemRepository) {
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData) {
        // 1. Sanitize the markdown for the description
        problemData.description = sanitizeMarkdownContent(problemData.description);
        // create problem 
        const problem = await this.ProblemRepository.createProblem(problemData);
        
        return problem;
        
    }

    async getAllProblems() {
        const response = await this.ProblemRepository.getAllProblems();
        return response;
    }

    async getProblemById(problemId) {
        const problem = await this.ProblemRepository.getProblemById(problemId);
        return problem;
    }

    async deleteProblem(problemId) {
        const response = await this.ProblemRepository.deleteProblem(problemId);
        return response;
    }

    async updateProblem(problemId, newData) {
        const response = await this.ProblemRepository.updateProblem(problemId, newData);
        return response;
    }
}

module.exports = ProblemService;