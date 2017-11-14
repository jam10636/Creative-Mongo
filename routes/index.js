var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //Adds mongoose as a usable dependency

mongoose.connect('mongodb://localhost/addressDB', { useMongoClient: true }); //Connects to a mongo database called "commentDB"

var commentSchema = mongoose.Schema({ //Defines the Schema for this database
Name: String,
Email: String,
Phone: String,
Address: String,
Photo: String,
Check: Boolean
});

var Address = mongoose.model('Address', commentSchema); //Makes an object from that schema as a model
var db = mongoose.connection; //Saves the connection as a variable to use
db.on('error', console.error.bind(console, 'connection error:')); //Checks for connection errors
db.once('open', function() { //Lets us know when we're connected
console.log('Connected');
});
/* GET home page. */
router.post('/address', function(req, res, next) {
var newaddress = new Address(req.body);
newaddress.save(function(err, post) { //[4]
  if (err) return console.error(err);
  res.sendStatus(200);
});
});
router.get('/address', function(req, res, next) {
Address.find(function(err,commentList) { //Calls the find() method on your database
  if (err) return console.error(err); //If there's an error, print it out
  else {
   res.json(commentList);
  }
});
});
router.delete('/address',function(req,res,next){
if(req.body[0]=='comment')
{
Address.remove(function(err){
if(err) return console.error(err)
})
}
else{
for(i=0;i<req.body.length;i++)
{
Address.findByIdAndRemove(req.body[i], function (err,offer){
    if(err) { throw err; }

});
}
}    // ...
res.sendStatus(200);

});
module.exports = router;
