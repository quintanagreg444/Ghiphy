alert("hi");
$(document).ready(function() {
  //VARIABLES
  //declare an array of video game companies  that will be displayed as buttons to users
  $('#addGames').on("click",function(event){
    event.preventDefault();
    addGame()


  });
  var  videoGames = ["Nintendo", "Sega", "Playstation", "Xbox","Turbo Grafix 16", "Atarii"];
renderButton();

function renderButton() {
$(".#buttonsArea").empty();

$(videoGames).each(function(index){
$("#buttonsArea").append('<button class="btn btn-primary gameButton">'+ videoGames[index]+'</button>');


});

$("gameButton").on("click",renderImage)


}

function renderImages() {
$("#imagesArea").empty();
queryURL="https://api.giphy.com/v1/gifs/search?api_key=GuBM3Nasyms3fhaPgS71fRpmHTbK213B&q=&limit=25&offset=0&rating=G&lang=en";

$.ajax({

  method:"GET",
  url:queryURL,

}).done( function(response){
  $(response.data).each(function(index){
    var imageBlock = $("<div class=\"imagesBlock\"><img class=\"still\" src=\""+response.data[index].images.fixed_height_still.url+"\" data-still=\""+response.data[index].images.fixed_height_still.url+"\" data-animated=\""+response.data[index].images.fixed_height.url+"\"/><p>Rating: "+response.data[index].rating+"</p></div>");
           $("#imagesArea").append(imageBlock);
           $(imageBlock).on("click",toggleState)

    
  })
})
}
function toggleState() {
  var thisGif = $(this).children('img');
  if (thisGif.hasClass('animated')) {
      thisGif.toggleClass('animated');
      thisGif.attr("src",thisGif.attr('data-still'))
  }
  else {
      thisGif.toggleClass('animated');
      thisGif.attr("src",thisGif.attr('data-animated'))
  }
}
function addComic() {
  if ($("#addGames").val() != '') {
      videoGames.push($("#addGames").val());
      renderButtons()
  }
      
}


});
  //FUNCTIONS
  //function to make buttons and add to page
  
    //utlizing jQuery select areaToAddTo and chain on .empty()
     

    
    //for loop that iterates over array passed into function
    
      //declare a variable to create a dynamic buttton with jQuery
      



      
      //add class to variable created and pass in the variale created
      //add attribute and pass in data-type and arrayToUse[i]
      //add text and pass arayToUse[i]
      //select areaToAddTo and append variable created
    
  
  //EVENT LISTENERS
  //create an event listener for a click event for the element .animal-button
  
    //select #animals element and chain on empty method
    //select .animal-button element use removeClass and pass in 'active'
    //select this and add class of 'active'
    //declare a variable and assign value of selecting this and add attribute of 'data-type'
    //declare a variable that stores queryURL. in the queryURL include search endpoint for giphy and concatenate the variable declared above and concatenate your api key
    //make ajax call with url and get method, chain .then with callback function
    
      //declare a variable results and stores the data
      //create a for loop that iterates over results
      
        //declare a variable and using jQuery dynamically generate a div with a class of animal-item
        //declare a variable that stores the rating of the data passed in
        //declare a variable and utilizing jQuery dynamically create a paragraph tag and using .text pass in rating
        //declare a variable that stores the results images fixed height url property
        //declare a variable that stores the fixed height still url property
        //declare a variable and utilizing jQuery dynamically create an img tag
        //add attribute to the variable created above passing in src and the variable still
        //add attribute to the variable animalImage and pass in data-still and still variable
        //add attribute to animalImage and pass in data-animate and animated variable
        //add class to animalImage and pass in 'animal-image'
        //append to animalDiv the p variable created
        //append to animalDiv and pass in animalImage
        //select #animals element and append animalDiv
      
  

  //create event listener listening for a click on '.animal-image'
  
    //declare a variable called state and assing a value utilizing jQuery select this and add an attribute of 'data-state'
    //create conditional logic for state, if state = still utilize  data-animate, else utilize date-still
  
  //create an event listener for element 'add-animal when user clicks
  
    //use preventDefault() to prevent refresh page
    //declare a newAnimal variable and utiliizing jQuery select input tag grab value
    //create condition if newAnimal.length > 2 push the newAnimal to the animals array
    //call createButtons function passing in arguments of animals, 'animal-button', and '#animal-buttons'
  
  //call createButtons function and pass in arguments animals, 'animal-button' and '#animal-buttons'
 
 
