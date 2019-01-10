const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db');
    }
    console.log('Successfully connected');
db.collection('User').findOneAndDelete({Name:'Kritika'}).then((result) => {
    console.log('User');
    console.log(result);
    console.log('Unable to fetch todos',err);
});
    db.close(); 
});
