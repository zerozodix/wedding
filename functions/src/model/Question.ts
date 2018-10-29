import { Answer } from "./Answer";

export class Question{
    private question : string;
    public get Question() : string {
        return this.question;
    }
    public set Question(v : string) {
        this.question = v;
    }

    private type : string;
    public get Type() : string {
        return this.type;
    }
    public set Type(v : string) {
        this.type = v;
    }
    
    private answers : Answer[];
    public get Answers() : Answer[] {
        return this.answers;
    }
    public set Answers(v : Answer[]) {
        this.answers = v;
    }
}