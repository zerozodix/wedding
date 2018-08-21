import BaseRepository from '../repository/BaseRepository';

class Question {
    private questionRepo = new BaseRepository('questions');

    public GetAllQuestions() {
        return this.questionRepo.GetDocuments().then(questions => {
            return questions;
        });
    }
}
export default Question;