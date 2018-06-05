//Pulling images from the NASA API database
console.log("js loaded!")
// 

      $("button").on("click", function () {

        console.log("BUTTON CLICKED!")

        var search = $(this).attr("data-item");

    //API Key
        var queryURL = "https://api.nasa.gov/" + "search?q=" + search + "&api_key=_&limit=10";

  //AJAX request
        $.ajax({
          url: queryURL,
          method: "GET"
        })
  
          .then(function(response) {
            console.log(response);
              var results = response.data; 
              
          var nasaPic = $("<img>").attr("src", results.url);

          $("#pics").append(nasaPic);
              
          });
      })  

    //search using a keyword through "data-item" 
    //only take the search results which are images, and put that URL in the src of an image tag
    //print that image tag to the div in HTML
    //limit 10 and clear on new button click