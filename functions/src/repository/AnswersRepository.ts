import BaseRepository from '../repository/BaseRepository';

class AnswersRepository extends BaseRepository {
    constructor() {
        super("questions");
    }

    public SaveAnswer(questions: string, userId: string, answer: string) {
        return this.collectionRepository
            .doc(questions)
            .collection(answer)
            .doc(userId)
            .set({ createDate: Date() });
    }
}

export default AnswersRepository;