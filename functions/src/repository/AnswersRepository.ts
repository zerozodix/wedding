import BaseRepository from '../repository/BaseRepository';

class AnswersRepository extends BaseRepository {
    constructor() {
        super("questions");
    }

    public SaveAnswer(questions: string, userId: string, answer: string) {
        return this.collectionRepository
            .doc(questions)
            .collection("userAnswers")
            .doc(userId)
            .set({ answer: answer, createDate: Date() });
    }

    public GetUserAnswer(questions: string, userId) {
        return this.collectionRepository
            .doc(questions)
            .collection("userAnswers")
            .doc(userId).get();
    }
}

export default AnswersRepository;