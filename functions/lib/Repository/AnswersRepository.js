"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRepository_1 = require("../repository/BaseRepository");
class AnswersRepository extends BaseRepository_1.default {
    constructor() {
        super("questions");
    }
    SaveAnswer(questions, userId, answer) {
        return this.collectionRepository
            .doc(questions)
            .collection("userAnswers")
            .doc(userId)
            .set({ answer: answer, createDate: Date() });
    }
    GetUserAnswer(questions, userId) {
        return this.collectionRepository
            .doc(questions)
            .collection("userAnswers")
            .doc(userId).get();
    }
}
exports.default = AnswersRepository;
//# sourceMappingURL=AnswersRepository.js.map