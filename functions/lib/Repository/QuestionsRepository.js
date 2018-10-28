"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../repository/BaseRepository");
class QuestionsRepository extends BaseRepository_1.default {
    constructor() {
        super("questions");
    }
    GetAllQuestions() {
        return this.GetDocuments().then(questions => {
            const data = [];
            questions.forEach(function (doc) {
                data.push(doc.data());
            });
            return data;
        });
    }
    GetQuestion(question) {
        return this.GetDocument(question).then(resQuestion => {
            return resQuestion.data();
        });
    }
    CreateQuestion(question) {
        const me = this.collectionRepository.doc(question.Question);
        const answerModels = question.Answers.map(answer => {
            return {
                "answer": answer.Answer || null,
                "nextQuestion": answer.NextQuestion || null
            };
        });
        console.log(answerModels);
        return me.set({ title: question.Question, answers: answerModels });
        //Set new Collection When Has Answer
        // .then(() => {
        //     me.collection(collectionFirstAnswer).doc("").set({});
        //     me.collection(collectionSecondAnswer).doc("").set({});
        // });
    }
}
exports.default = QuestionsRepository;
//# sourceMappingURL=QuestionsRepository.js.map