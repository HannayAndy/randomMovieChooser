var movies;
movies = [];

function pushData()
{
    // get value from the input text
    var inputText = document.getElementById('inputText').value;
    // append data to the array
    movies.push(inputText);
    var pval = "";
    for(i = 0; i < movies.length; i++)
    {
        pval = pval + movies[i] + "<br/>";
    }
    // display array data
    document.getElementById('pText').innerHTML = pval;
}


function loaded () {
    var movieNum = Math.floor((Math.random() * movies.length ));

    var chosenMovie = (movies[movieNum]);
    document.getElementById("movie").innerHTML = chosenMovie;

    
    $.getJSON("https://omdbapi.com/?t="+chosenMovie+"&apikey=58fa79c0&",
    function(result){console.log(result);  
        //display result info
       document.getElementById("outcome").innerHTML = "Your result is "+ chosenMovie ;
       document.getElementById("release").innerHTML = "Release Date " +result.Released
       document.getElementById("runtime").innerHTML = "Runtime " +result.Runtime
       document.getElementById("img").src =result.Poster
       //clear rating info
       document.getElementById("ratings").innerHTML = " "
       // gets all ratings results 
       console.log(result.Ratings);
        $.each(result.Ratings, function(index, value) {
               var para = document.createElement("P");                 // Create a <p> element
               para.innerHTML = value.Source + ":  " + value.Value;                // Insert text
               document.getElementById("ratings").appendChild(para);
   
                        });
       var str = "Find out where to watch it here:";
       var result = str.link("https://www.justwatch.com/au/search?q="+chosenMovie);
       document.getElementById("demo").innerHTML = result;
      



    });



   
    
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
