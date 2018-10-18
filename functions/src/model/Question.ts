import { Answer } from "./Answer";

export class Question{
    private _Question : string;
    public get Question() : string {
        return this._Question;
    }
    public set Question(v : string) {
        this._Question = v;
    }

    private _Type : string;
    public get Type() : string {
        return this._Type;
    }
    public set Type(v : string) {
        this._Type = v;
    }
    
    private _Answers : Answer[];
    public get Answers() : Answer[] {
        return this._Answers;
    }
    public set Answers(v : Answer[]) {
        this._Answers = v;
    }
}