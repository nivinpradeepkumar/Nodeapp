var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sample application' });
});

/* GET Userlist page. */
router.get('/api/v1/users', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    // console.log(docs);
      res.render('userlist', {
          "userlist" : docs         
      });
  });
});
//Display a particular data
router.get('/api/v1/user/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');  
  collection.find(req.params.id ,function(e,docs){
    res.json(docs);
    console.log(docs);
  });
});

/* GET New User page. */
router.get('/newuser', function(req, res) {
  res.render('newuser', { title: 'Add New User' });
});

router.post('/showuser', function(req, res) {
  var id=req.body.Firstnames;
  console.log(id);
   res.redirect("/api/v1/user/5aec2ad70284dd478687307f");
});




/* POST to Add User Service */
router.post('/adduser', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var FirstName = req.body.Firstnames;
  var LastName = req.body.Lastnames;
  var Email = req.body.EmailId;
  var phone = req.body.Phonenumber;

  // Set our collection
  var collection = db.get('usercollection');

  // Submit to the DB
  collection.insert({
      "FirstName" : FirstName,
      "LastName" : LastName,
      "EmailId" : Email,
      "Phonenumber": phone
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect("/api/v1/users");
      }
  });
});

/* delete User according to id */
router.get('/api/v1/userdelete/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');  
  console.log(req.params.id);
  collection.remove(req.params.id ,function(e,docs){
    res.json("Data has been deleted...");
  });
});

router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});


module.exports = router;
