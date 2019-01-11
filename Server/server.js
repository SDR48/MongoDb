var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var User = mongoose.model('User',{
    Name:{
        type: String
    },
    Age:{
        type: Number
    }
});
 var newtd = new User({
     Name: 'Saish'
 });

 newtd.save().then((doc)=>{
     console.log('Saved User',doc);
 },(err)=>{
     console.log('Unable to save')
 });