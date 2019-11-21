module.exports = {
    // Use connect method to connect to the Server
    findDocuments: function (db) {
        return new Promise((resolve, reject) => {
            // Get the documents collection
            const collection = db.collection('decembersalaryincrement');
            // Find some documents
            collection.find({}).toArray(function (err, docs) {
                console.log("Found the following records");
                console.log(docs)
                resolve(docs);
            });
        })

    },

    updateDocument: function (db, callback) {
        return new Promise((resolve, reject) => {
            // Get the documents collection
            const collection = db.collection('decembersalaryincrement');
            // Update document where a is 2, set b equal to 1
            collection.updateOne({ age: 10 }
                , { $set: { address: 'Increment is 55 percent' } }, function (err, result) {
                    console.log("Updated the document with the field a equal to 2");
                    resolve(result);
                });
        });
    },

    removeDocument: function (db, callback) {
        // Get the documents collection
        const collection = db.collection('documents');
        // Delete document where a is 3
        collection.deleteOne({ a: 3 }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Removed the document with the field a equal to 3");
            callback(result);
        });
    }
}