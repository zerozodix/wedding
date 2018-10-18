import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import QuestionService from './service/QuestionServices';

admin.initializeApp(functions.config().firebase);

const app = express();
const questionService = new QuestionService();
app.disable("x-powered-by");

app.post("/questions/create", async function CreateQuestion(req: express.Request, res: express.Response) {
    questionService.Create(req.body.question, req.body.type, req.body.answers).then(resQuestion => {
        res.status(200).send();
    });
});

app.get("/questions/all", async function GetAllQuestions(req: express.Request, res: express.Response) {
    questionService.GetAllQuestions().then(resQuestion => {
        res.status(200).send(resQuestion);
    });
});

app.get("/questions/:question", async function GetQuestion(req: express.Request, res: express.Response) {
    console.log("question => ", req.param('question'));
    questionService.GetQuestion(req.param('question')).then(resQeustion => {
        res.status(200).send(resQeustion);
    });

});

exports.api = functions.region('asia-northeast1').https.onRequest(app);
