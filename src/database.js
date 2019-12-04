const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/jwt-proj',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(db => console.log('Database is connected'));