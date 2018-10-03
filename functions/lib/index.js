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
const Question_1 = require("./business/Question");
admin.initializeApp(functions.config().firebase);
const app = express();
app.disable("x-powered-by");
app.post("/questions/create", function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const questionService = new Question_1.default();
        questionService.Create(req.body.question, req.body.firstChoice, req.body.secondChoice).then(resQuestion => {
            res.status(200).send();
        });
    });
});
exports.api = functions.region('asia-northeast1').https.onRequest(app);
//# sourceMappingURL=index.js.map