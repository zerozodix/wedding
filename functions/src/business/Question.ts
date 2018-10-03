import BaseRepository from '../repository/BaseRepository';

class QuestionService {
    private questionRepo = new BaseRepository('questions');

    public GetAllQuestions() {
        return this.questionRepo.GetDocuments().then(questions => {
            return questions;
        });
    }

    public Create(question: string, firstChoice: string, secondChoice: string) {
        return this.questionRepo.AddDocument({ question: question });
    }
}
export default QuestionService;