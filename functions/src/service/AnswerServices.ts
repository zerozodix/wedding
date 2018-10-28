import { resolve } from "path";
import AnswersRepository from "../repository/AnswersRepository";

class AnswerServices {
    private answerRepo = new AnswersRepository();
    public AnswerQuestions(question: string, userId: string, answer: string) {
        console.log("question => " + question);
        console.log("answer => " + answer);
        return this.answerRepo.SaveAnswer(question, userId, answer);
    }

}
export default AnswerServices;