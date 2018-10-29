"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnswersRepository_1 = require("../repository/AnswersRepository");
const QuestionsRepository_1 = require("../repository/QuestionsRepository");
class AnswerServices {
    constructor() {
        this.answerRepo = new AnswersRepository_1.default();
        this.questionRepo = new QuestionsRepository_1.default();
    }
    AnswerQuestions(question, userId, answer) {
        console.log("question => " + question);
        console.log("answer => " + answer);
        return this.questionRepo.GetQuestion(question).then(resQuestion => {
            console.log("restponse question => " + JSON.stringify(resQuestion));
            const isQuestionHasAnswerInChoice = resQuestion.answers.find(item => item.answer === answer);
            if (isQuestionHasAnswerInChoice) {
                console.log(isQuestionHasAnswerInChoice);
                return this.answerRepo.GetUserAnswer(question, userId).then(reqUserAnswer => {
                    if (reqUserAnswer.exists) {
                        console.log("user had ask this question.");
                        return "user had ask this question.";
                    }
                    else {
                        return this.answerRepo.SaveAnswer(question, userId, answer).then(saveRes => {
                            console.log(saveRes);
                        });
                    }
                });
            }
            else {
                console.log("not have this answer in question.");
                return "not have this answer in question.";
            }
        });
    }
}
exports.default = AnswerServices;
//# sourceMappingURL=AnswerServices.js.map