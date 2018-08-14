import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import BaseRepository from './repository/BaseRepository';

admin.initializeApp(functions.config().firebase);

function getBooks(uid: string) {
    const postDocument = new BaseRepository('test');
    postDocument.AddDocument({ foo: uid }).then(documentReference => {
        console.log(`Root location for document is ${documentReference.id}`);
        console.log(`------------------------`);
        let bar = postDocument.GetDocument(documentReference.id);
        bar.then(item => {
            console.log(`foo ${item.foo}`)
        });

    });
}

const app = express();
app.disable("x-powered-by");

app.get("/users/:uid", async function getUser(req: express.Request, res: express.Response) {
    const uid = req.params.uid;
    res.status(200).send(getBooks(uid));
});

app.post("/users", async function createUser(req: express.Request, res: express.Response) {
    const uid = req.params.uid;
    res.status(200).send(`You requested user with UID = ${uid}`);
});

exports.api = functions.region('asia-northeast1').https.onRequest(app);
