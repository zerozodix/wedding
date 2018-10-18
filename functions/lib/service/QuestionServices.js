"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuestionsRepository_1 = require("../repository/QuestionsRepository");
const Question_1 = require("../model/Question");
const Answer_1 = require("../model/Answer");
class QuestionService {
    constructor() {
        this.questionRepo = new QuestionsRepository_1.default();
    }
    GetAllQuestions() {
        return this.questionRepo.GetAllQuestions().then(questions => {
            return questions;
        });
    }
    Create(question, type, answers) {
        const questionModel = new Question_1.Question();
        questionModel.Question = question;
        questionModel.Type = type;
        questionModel.Answers = answers.map(answer => {
            const answerModel = new Answer_1.Answer();
            answerModel.Answer = answer.answer;
            answerModel.NextQuestion = answer.nextQuestion;
            return answerModel;
        });
        return this.questionRepo.CreateQuestion(questionModel);
    }
}
exports.default = QuestionService;
//# sourceMappingURL=QuestionServices.js.map