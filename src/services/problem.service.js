const sanitizeMarkdownContent = require('../utils/markdownSanitizer')

class ProblemService {
    constructor(ProblemRepository) {
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData) {
        try {
            // 1. Sanitize the markdown for the description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("Problem data", problemData);
            
            const problem = await this.ProblemRepository.createProblem(problemData);
            console.log("Problem created", problem);
            
            return problem;
        } catch(err) {
            console.log(err);
            throw err
        }
    }
}

module.exports = ProblemService;