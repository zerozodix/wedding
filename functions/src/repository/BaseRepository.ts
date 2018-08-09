import * as functions from 'firebase-functions';

class BaseRepository {
    private documentRepository;
    constructor(document: string) {
        const Firestore = require('@google-cloud/firestore');
        const firestore = new Firestore(functions.config().firebase);
        this.documentRepository = firestore.doc(document);
    }
    public AddDocument(document: object) {
        return this.documentRepository.set(document);
    }
}
export default BaseRepository;