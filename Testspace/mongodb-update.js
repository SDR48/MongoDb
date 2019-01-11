const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to db');
    }
    console.log('Connection Successful!!');
    db.collection('User').findOneAndUpdate({
        Name: 'Nitish'
    },{
        $inc:{
            Age:1
        }
    }).then((result)=>{
        console.log(result)
    });
    db.close();
});