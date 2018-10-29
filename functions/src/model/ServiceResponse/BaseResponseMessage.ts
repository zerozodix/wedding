export class BaseResponseMessage{
    private status : string;
    public get Status  () : string {
        return this.status;
    }
    public set Status  (v : string) {
        this.status = v;
    }

    private error : string[];
    public get Error() : string[] {
        return this.error;
    }
    public set Error(v : string[]) {
        this.error = v;
    }
    
    
}