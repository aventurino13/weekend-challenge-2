
// list of requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var calculation = require('./calculationModule.js');


// list of globals
var port = 4000;
var allCalculations = [];


// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );


// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
});


// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  // send back index.html as response
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url

//add post
app.post('/addCalc', function( req, res){
  console.log( '/addCalc hit:', req.body );
  var currentCalc = calculation(req.body);
  allCalculations = [];
  allCalculations.push(currentCalc);
  console.log( 'calculation:', currentCalc );
  res.send( 200 );
});//end addCalc


//add GET
app.get('/sum', function ( req, res){
  console.log('/sum hit');
  var responseObject = {
    sum : allCalculations
  }; // end responseObject
  res.send(responseObject);
});
