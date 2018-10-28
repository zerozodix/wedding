"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnswersRepository_1 = require("../repository/AnswersRepository");
class AnswerServices {
    constructor() {
        this.answerRepo = new AnswersRepository_1.default();
    }
    AnswerQuestions(question, userId, answer) {
        console.log("question => " + question);
        console.log("answer => " + answer);
        return this.answerRepo.SaveAnswer(question, userId, answer);
    }
}
exports.default = AnswerServices;
//# sourceMappingURL=AnswerServices.js.map