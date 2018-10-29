import { resolve } from "path";
import AnswersRepository from "../repository/AnswersRepository";
import QuestionsRepository from "../repository/QuestionsRepository";
import { Answer } from "../model/Answer";

class AnswerServices {
    private answerRepo = new AnswersRepository();
    private questionRepo = new QuestionsRepository();
    public AnswerQuestions(question: string, userId: string, answer: string) {
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
                console.log("not have this answer in question.")
                return "not have this answer in question.";
            }
        })
    }

}
export default AnswerServices;