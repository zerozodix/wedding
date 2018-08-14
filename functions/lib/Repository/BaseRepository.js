"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
class BaseRepository {
    constructor(collection) {
        const Firestore = require('@google-cloud/firestore');
        const firestore = new Firestore(functions.config().firebase);
        this.collectionRepository = firestore.collection(collection);
    }
    AddDocument(document) {
        return this.collectionRepository.add(document);
        // return this.collectionRepository.set(document);
    }
    GetDocument(documentId) {
        return this.collectionRepository.doc(documentId).get();
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map