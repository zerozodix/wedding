export class Answer {

    private _Answer: string;
    public get Answer(): string {
        return this._Answer;
    }
    public set Answer(v: string) {
        this._Answer = v;
    }


    private _NextQuestion: string;
    public get NextQuestion(): string {
        return this._NextQuestion;
    }
    public set NextQuestion(v: string) {
        this._NextQuestion = v;
    }

}