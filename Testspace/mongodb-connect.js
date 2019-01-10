//const client = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db');
    }
    console.log('Successfully connected');
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.collection('User').insertOne({
        Name:'Brendan',
        Age:'22'
    },(err,result)=>{
            if(err){
                return console.log('Unable to insert',err);
            }
            console.log(JSON.stringify(result.ops,undefined,2));
        });
    db.close(); 
});