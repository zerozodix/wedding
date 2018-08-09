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
const BaseRepository_1 = require("./repository/BaseRepository");
admin.initializeApp(functions.config().firebase);
function getBooks(uid) {
    const postDocument = new BaseRepository_1.default('posts/${uid}');
    postDocument.AddDocument({ test: 'test' }).then(() => {
        // Document created successfully.
    });
}
const app = express();
app.disable("x-powered-by");
app.get("/users/:uid", function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const uid = req.params.uid;
        res.status(200).send(getBooks(uid));
    });
});
app.post("/users", function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const uid = req.params.uid;
        res.status(200).send(`You requested user with UID = ${uid}`);
    });
});
exports.api = functions.region('asia-northeast1').https.onRequest(app);
//# sourceMappingURL=index.js.map