$( document ).ready(function() {

//Style the option field
$('#city-type').css({'width':'500px', 'height':'72px', 'font-size': '30px', 'margin-left': '25%'});

//Use an array to contain all the city data
var city = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

//Declare var "Options"
var Options = '';

//Use for loop to loop through all the city option data 
   for (var i = 0; i < city.length; i++) {
       Options += '<option>' + city[i] + '</option>';
       }

//Insert the city options to the select element in the html
   $('select').append(Options); 

//Use change event handler to capture user actions
   $('select').change(function() {

//Get the value of user actions 
       var userChoice = $('#city-type').val();

//If the user's choice is 'NYC', make the body background image become nyc.jpg       
       if (userChoice === 'NYC'){
           $('body').attr('class','nyc');
       } else if (userChoice === 'SF'){
           $('body').attr('class','sf');
       } else if (userChoice === 'LA'){
           $('body').attr('class','la');
       } else if (userChoice === 'ATX'){
           $('body').attr('class','austin');
       } else if (userChoice === 'SYD'){
           $('body').attr('class','sydney');
       } else{
      document.location.href = "index.html";
  }
});
	
});
