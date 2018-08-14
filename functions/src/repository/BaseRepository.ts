import * as functions from 'firebase-functions';

class BaseRepository {
    private collectionRepository;
    constructor(collection: string) {
        const Firestore = require('@google-cloud/firestore');
        const firestore = new Firestore(functions.config().firebase);
        this.collectionRepository = firestore.collection(collection);
    }
    public AddDocument(document: object) {
        return this.collectionRepository.add(document);
    }
    public GetDocument(documentId: string) {
        return this.collectionRepository.doc(documentId).get()
    }
}
export default BaseRepository;