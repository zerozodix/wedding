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
const QuestionServices_1 = require("./service/QuestionServices");
const AnswerServices_1 = require("./service/AnswerServices");
admin.initializeApp(functions.config().firebase);
const app = express();
const questionService = new QuestionServices_1.default();
const answerService = new AnswerServices_1.default();
app.disable("x-powered-by");
app.post("/questions/create", function CreateQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        questionService.Create(req.body.question, req.body.type, req.body.answers).then(resQuestion => {
            res.status(200).send();
        });
    });
});
app.get("/questions/all", function GetAllQuestions(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        questionService.GetAllQuestions().then(resQuestion => {
            res.status(200).send(resQuestion);
        });
    });
});
app.get("/questions/:question", function GetQuestion(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        questionService.GetQuestion(req.param('question')).then(resQeustion => {
            res.status(200).send(resQeustion);
        });
    });
});
app.post("/answers/ask", function Ask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        answerService.AnswerQuestions(req.body.question, "userId", req.body.answer).then(resAnswer => {
            res.status(200).send(resAnswer);
        });
    });
});
exports.api = functions.region('asia-northeast1').https.onRequest(app);
//# sourceMappingURL=index.js.map