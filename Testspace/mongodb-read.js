const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db');
    }
    console.log('Successfully connected');
db.collection('User').find({Name:'Kritika'}).toArray().then((docs) => {
    console.log('User');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('Unable to fetch todos',err);
});
    db.close(); 
});