export class Answer {

    private answer: string;
    public get Answer(): string {
        return this.answer;
    }
    public set Answer(v: string) {
        this.answer = v;
    }

    private nextQuestion: string;
    public get NextQuestion(): string {
        return this.nextQuestion;
    }
    public set NextQuestion(v: string) {
        this.nextQuestion = v;
    }

}