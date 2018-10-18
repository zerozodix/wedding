import BaseRepository from '../repository/BaseRepository';
import { Question } from '../model/Question';


class QuestionsRepository extends BaseRepository {
    constructor() {
        super("questions");
    }

    public GetAllQuestions() {
        return this.GetDocuments().then(questions => {
            const data = [];
            questions.forEach(function (doc) {
                data.push(doc.data());
            });
            return data;
        });
    }

    public CreateQuestion(question: Question) {
        const me = this.collectionRepository.doc(question.Question);
        const collectionFirstAnswer = "firstAnswer";
        const collectionSecondAnswer = "secondAnswer";

        const answerModels = question.Answers.map(answer => {
            return {
                "answer": answer.Answer || null,
                "nextQuestion": answer.NextQuestion || null
            };
        })
        console.log(answerModels);

        return me.set({ title: question.Question, type: question.Type, answers: answerModels });
        //Set new Collection When Has Answer
        // .then(() => {
        //     me.collection(collectionFirstAnswer).doc("").set({});
        //     me.collection(collectionSecondAnswer).doc("").set({});
        // });
    }

}
export default QuestionsRepository;