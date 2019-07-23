
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

class DbHelper
{
    constructor(url)
    {
        this.dbUrl = url;
        this.dbClient = null;
        this.dbName = 'Cluster0'
    }

    async client() {
        if (this.dbClient && this.dbClient.isConnected()) {
            return this.dbClient;
        } else {
            console.log(`Connecting to ${this.dbUrl}...`)
            this.dbClient = await MongoClient.connect(this.dbUrl, { useNewUrlParser: true }).catch(err=>console.log(err))
            console.log("Connected to database.");
            return this.dbClient;
        }
    }
    async collection(myCollection) {
        const client = await this.client();
        const db = client.db(this.dbName);
        const collection = db.collection(myCollection);
        return collection;
    }

    async insert(data){
        const collection = await this.collection('media');
        return await collection.insertOne(data);
    }

    async pull(){
        const collection = await this.collection('media');
        const result = await collection.find().toArray();
        // console.log(result)
        return result;
    }

    // async newUser(data){
    //     const collection = await this.collection('users');
    //     collection.insertOne(data);
    // }

    async getUser(){
        const collection = await this.collection('users');
        const result = await collection.find().toArray();
        // console.log(result)
        return new Promise((resolve, reject) => {
            resolve(result);
        });
    }

    async getOne(id){
        const collection = await this.collection('media');
        const result = await collection.find({"_id": ObjectId(id)}).toArray()
        return result[0];
    }

    async update(id, body){
        const collection = await this.collection('media');
        return await collection.updateOne({ "_id": ObjectId(id) }, { $set: body })
    }

    async delete(id){
        const collection = await this.collection('media');
        return await collection.deleteOne({"_id": ObjectId(id)})
    }
}

module.exports = DbHelper;