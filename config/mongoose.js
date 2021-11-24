const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://localhost/contactlist_db',{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

//acquire connection
const db = mongoose.connection;


// error message
db.on('error',console.error.bind(console,'error connecting to db'))


//successfull message
db.once('open',function(){
    console.log('Successfully connected to Database')
})