"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../repository/BaseRepository");
class QuestionService {
    constructor() {
        this.questionRepo = new BaseRepository_1.default('questions');
    }
    GetAllQuestions() {
        return this.questionRepo.GetDocuments().then(questions => {
            return questions;
        });
    }
    Create(question, firstChoice, secondChoice) {
        return this.questionRepo.AddDocument({ question: question });
    }
}
exports.default = QuestionService;
//# sourceMappingURL=Question.js.map