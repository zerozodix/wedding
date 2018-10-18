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
admin.initializeApp(functions.config().firebase);
const app = express();
const questionService = new QuestionServices_1.default();
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
        console.log("question => ", req.param('question'));
        questionService.GetQuestion(req.param('question')).then(resQeustion => {
            res.status(200).send(resQeustion);
        });
    });
});
exports.api = functions.region('asia-northeast1').https.onRequest(app);
//# sourceMappingURL=index.js.map