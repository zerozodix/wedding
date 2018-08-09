"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
class BaseRepository {
    constructor(document) {
        const Firestore = require('@google-cloud/firestore');
        const firestore = new Firestore(functions.config().firebase);
        this.documentRepository = firestore.doc(document);
    }
    AddDocument(document) {
        return this.documentRepository.set(document);
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map