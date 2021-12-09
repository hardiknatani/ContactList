const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
//connect to database
mongoose.connect(uri,{
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