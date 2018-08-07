"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const admin = require("firebase-admin");
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
admin.initializeApp(functions.config().firebase);
const app = express();
app.disable("x-powered-by");
app.get("/users/:uid", function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Guess what, uid will NEVER be null in this context because of the Express router.
        const uid = req.params.uid;
        res.status(200).send(`You requested user with UID = ${uid}`);
    });
});
app.post("/users", function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Guess what, uid will NEVER be null in this context because of the Express router.
        const uid = req.params.uid;
        res.status(200).send(`You requested user with UID = ${uid}`);
    });
});
// This line is important. What we are doing here is exporting ONE function with the name
// `api` which will always route
exports.api = functions.region('asia-northeast1').https.onRequest(app);
//# sourceMappingURL=index.js.map