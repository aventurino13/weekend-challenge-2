
$(document).ready(onReady);

function onReady (){
  console.log('in onReady function');

  $('.calcButtons').on('click', sendObject);

  $('#clearButton').on('click', clearCalculation);

}
//create object to sendFile
function sendObject () {
 console.log($(this).attr('id'));
 var calc = $(this).attr('id');

 var objectToSend = {
    x : $('#input1').val(),
    y : $('#input2').val(),
    type : calc
    };

    //ajax to POST obj to server
  $.ajax({
    type: 'POST',
    url: '/addCalc',
    data: objectToSend,
    success: function(response){
      console.log( 'response from server:', response );
      }
  });

  //call function to update answer to DOM
  displayAnswer();

}//end sendObject

//define function to show answer on DOM

function displayAnswer(){

  //ajax to GET answer from server
  $.ajax({
    type: 'GET',
    url: '/sum',
    success: function( response ){
      console.log( 'server response for GET:', response.sum );
      $( '#calcAnswer' ).empty();
      for (var i = 0; i < response.sum.length; i++) {
        $( '#calcAnswer' ).append( '<p>' + response.sum[i] +  '</p>' );
      }//end for
    }//end success
  });//end ajax
}//end display answer


function clearCalculation (){
  $( '#calcAnswer' ).empty();
  $('.input').val('');

}
