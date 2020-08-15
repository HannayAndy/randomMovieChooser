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
    var str = "Find out where to watch it here:";
    var result = str.link("https://www.justwatch.com/au/search?q="+chosenMovie);
    document.getElementById("demo").innerHTML = result;
    //var str = "Free Web Building Tutorials!";
    //var result = str.link("https://www.w3schools.com");
    //document.getElementById("demo").innerHTML = result;

}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}