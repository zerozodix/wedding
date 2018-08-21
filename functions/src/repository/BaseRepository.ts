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
        return this.collectionRepository.doc(documentId).get();
    }

    public GetDocuments() {
        return this.collectionRepository.get();
    }

    public DeleteDocument(documentId: string){
        return this.collectionRepository.doc(documentId).delete();
    }

    public UpdateDocument(documentId: string, document: object){
        return this.collectionRepository.doc(documentId).set(document);
    }
    
}
export default BaseRepository;