
// list of requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );


// list of globals
var port = 4000;


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