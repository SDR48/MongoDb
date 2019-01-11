var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var User = mongoose.model('users',{
    Name:{
        type: String,
        trim: true
    },
    Age:{
        type: Number
    },
    Email:{
        type: String,
        minlength: 1,
        required: 2,
        trim: true
    }

});
 var newtd = new User({
     Name: 'Saish',
     Age: 22,
     Email: 'saishrege24@gmail.com',
     
 },
 );

 newtd.save().then((doc)=>{
     console.log('Saved User',doc);
 },(err)=>{
     console.log('Unable to save')
 });