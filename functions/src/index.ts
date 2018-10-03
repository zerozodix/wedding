import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import QuestionService from './business/Question';

admin.initializeApp(functions.config().firebase);

const app = express();
app.disable("x-powered-by");

app.post("/questions/create", async function createUser(req: express.Request, res: express.Response) {
    const questionService = new QuestionService();
    questionService.Create(req.body.question, req.body.firstChoice, req.body.secondChoice).then(resQuestion => {
        res.status(200).send();
    });
});

exports.api = functions.region('asia-northeast1').https.onRequest(app);
