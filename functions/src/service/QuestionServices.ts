import QuestionsRepository from "../repository/QuestionsRepository";
import { Question } from "../model/Question";
import { Answer } from "../model/Answer";

class QuestionService {
    private questionRepo = new QuestionsRepository();

    public GetAllQuestions() {
        return this.questionRepo.GetAllQuestions().then(questions => {
            return questions;
        });
    }

    public Create(question: string, type: string, answers: any[]) {
        const questionModel = new Question();
        questionModel.Question = question;
        questionModel.Type = type;

        questionModel.Answers = answers.map(answer => {
            const answerModel = new Answer();
            answerModel.Answer = answer.answer;
            answerModel.NextQuestion = answer.nextQuestion;
            return answerModel;
        });

        return this.questionRepo.CreateQuestion(questionModel);
    }
}
export default QuestionService;