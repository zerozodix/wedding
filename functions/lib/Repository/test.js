"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
class TestRepository {
    makeUppercase() {
        functions.database.ref('/messages/{pushId}/original')
            .onCreate((snapshot, context) => {
            // Grab the current value of what was written to the Realtime Database.
            const original = snapshot.val();
            console.log('Uppercasing', context.params.pushId, original);
            const uppercase = original.toUpperCase();
            // You must return a Promise when performing asynchronous tasks inside a Functions such as
            // writing to the Firebase Realtime Database.
            // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
            return snapshot.ref.parent.child('uppercase').set(uppercase);
        });
    }
}
exports.default = TestRepository;
//# sourceMappingURL=test.js.map