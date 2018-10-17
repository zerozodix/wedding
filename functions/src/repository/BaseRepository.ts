import * as functions from 'firebase-functions';

class BaseRepository {
    protected collectionRepository;

    constructor(collection: string) {
        const Firestore = require('@google-cloud/firestore');
        const settings = { timestampsInSnapshots: true };
        const firestore = new Firestore(functions.config().firebase);
        firestore.settings(settings);
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