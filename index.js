//jshint esversion:6 

var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', function(req, res) {
    {
        res.sendfile(__dirname + '/signup.html');
    }
});

app.post('/', function(req, res) {
	/*optional stuff to do after success */
	var first_name = req.body.fname;
	var last_name = req.body.lname;
	var email = req.body.email;

	var data ={
		members:[
		 {			
		email_address:email, 
		status:'subscribed'
	      }
		]
	};

var jsondata = JSON.stringify(data);
    
 var options ={
   url:'https://us19.api.mailchimp.com/3.0/lists/bd739a5ada',
   method:'POST',
   headers:{
   	'Authorization':'vishal af1861d182f093e095a23ce494f96f9b-us19'
   },
   body:jsondata

 };

    request(options, function(err,res, body){

      if(err){
      	console.log(err);
      }
      else {
      	console.log(res.statusCode);
      }

    });

});

app.listen(3000, function() {
    console.log('server listening on port 3000 : ');
});

// af1861d182f093e095a23ce494f96f9b-us19
// bd739a5ada