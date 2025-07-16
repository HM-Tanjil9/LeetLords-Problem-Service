const sanitizeMarkdownContent = require('../utils/markdownSanitizer')

class ProblemService {
    constructor(ProblemRepository) {
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData) {
        // 1. Sanitize the markdown for the description
        problemData.description = sanitizeMarkdownContent(problemData.description);
        console.log("Problem data", problemData);
        
        const problem = await this.ProblemRepository.createProblem(problemData);
        console.log("Problem created", problem);
        
        return problem;
        
    }

    async getAllProblems() {
        const problems = await this.ProblemRepository.getAllProblems();
        return problems;
    }
}

module.exports = ProblemService;