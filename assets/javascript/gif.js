$(document).ready(function() {
  //VARIABLES
  //declare an array of video game companies  that will be displayed as buttons to users
  var  videoGames = ["Nintendo", "Sega", "Playstation", "Xbox","Turbo Grafix 16", "Atarii"];
  //FUNCTIONS
  //function to make buttons and add to page
  function populateButtons(videoGames, classToAdd, areaToAddTo) {
    //utlizing jQuery select areaToAddTo and chain on .empty()
     $(areaToAddTo).empty();

    
    //for loop that iterates over array passed into function
    for (var i = 0; i <videoGame.length; i++) {
      //declare a variable to create a dynamic buttton with jQuery
      var createButtons =
        $("<button>")
        console.log(createButtons)



      
      //add class to variable created and pass in the variale created
      //add attribute and pass in data-type and arrayToUse[i]
      //add text and pass arayToUse[i]
      //select areaToAddTo and append variable created
    }
  }
  //EVENT LISTENERS
  //create an event listener for a click event for the element .animal-button
  $(document).on("click", ".animal-button", function() {
    //select #animals element and chain on empty method
    //select .animal-button element use removeClass and pass in 'active'
    //select this and add class of 'active'
    //declare a variable and assign value of selecting this and add attribute of 'data-type'
    //declare a variable that stores queryURL. in the queryURL include search endpoint for giphy and concatenate the variable declared above and concatenate your api key
    //make ajax call with url and get method, chain .then with callback function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      //declare a variable results and stores the data
      //create a for loop that iterates over results
      for (var i = 0; i < results.length; i++) {
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
      }
    });
  });
  //create event listener listening for a click on '.animal-image'
  $(document).on("click", ".animal-image", function() {
    //declare a variable called state and assing a value utilizing jQuery select this and add an attribute of 'data-state'
    //create conditional logic for state, if state = still utilize  data-animate, else utilize date-still
  });
  //create an event listener for element 'add-animal when user clicks
  $("#add-animal").on("click", function(event) {
    //use preventDefault() to prevent refresh page
    //declare a newAnimal variable and utiliizing jQuery select input tag grab value
    //create condition if newAnimal.length > 2 push the newAnimal to the animals array
    //call createButtons function passing in arguments of animals, 'animal-button', and '#animal-buttons'
  });
  //call createButtons function and pass in arguments animals, 'animal-button' and '#animal-buttons'
 });
 
