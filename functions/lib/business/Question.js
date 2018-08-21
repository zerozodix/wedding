"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../repository/BaseRepository");
class Question {
    constructor() {
        this.questionRepo = new BaseRepository_1.default('questions');
    }
    GetAllQuestions() {
        return this.questionRepo.GetDocuments().then(questions => {
            return questions;
        });
    }
}
exports.default = Question;
//# sourceMappingURL=Question.js.map