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

//movieNum = Math.floor((Math.random() * (movies.length -1)));
//console.log(movieNum);
//console.log(movies[movieNum]);
//chosenMovie = (movies[movieNum]);

function loaded () {
    var movieNum = Math.floor((Math.random() * movies.length ));

    var chosenMovie = (movies[movieNum]);
    document.getElementById("movie").innerHTML = chosenMovie;

    
    $.getJSON("https://omdbapi.com/?t="+chosenMovie+"&apikey=58fa79c0&",
    function(result){console.log(result);  
    
       document.getElementById("outcome").innerHTML = "Your result is "+ chosenMovie + " with a metascore of "+ result.Metascore;
       document.getElementById("release").innerHTML = "Release Date " +result.Released
       document.getElementById("runtime").innerHTML = "Runtime " +result.Runtime
       document.getElementById("img").src =result.Poster
       var str = "Find out where to watch it here:";
       var result = str.link("https://www.justwatch.com/au/search?q="+chosenMovie);
       document.getElementById("demo").innerHTML = result;
       //var str = "Free Web Building Tutorials!";
       //var result = str.link("https://www.w3schools.com");
       //document.getElementById("demo").innerHTML = result;



    });



   
    
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
