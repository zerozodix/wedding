import * as express from 'express';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase);

const app = express();
app.disable("x-powered-by");

app.get("/users/:uid", async function getUser(req: express.Request, res: express.Response) {
    // Guess what, uid will NEVER be null in this context because of the Express router.
    const uid = req.params.uid;
    res.status(200).send(`You requested user with UID = ${uid}`);
});

app.post("/users", async function createUser(req: express.Request, res: express.Response) {
    // Guess what, uid will NEVER be null in this context because of the Express router.
    const uid = req.params.uid;
    res.status(200).send(`You requested user with UID = ${uid}`);
});

// This line is important. What we are doing here is exporting ONE function with the name
// `api` which will always route
exports.api = functions.region('asia-northeast1').https.onRequest(app);
