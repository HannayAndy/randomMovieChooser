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

    //clear previous images
    document.getElementById("thumbnail1").innerHTML = ""; // <-- Clears the image
    document.getElementById("thumbnail2").innerHTML = ""; 
    var movieNum = Math.floor((Math.random() * movies.length ));

    var chosenMovie = (movies[movieNum]);
    document.getElementById("movie").innerHTML = chosenMovie;

    
    $.getJSON("https://api.rawg.io/api/games?key=0f616123c9284efc8260b57af5346dba&search="+chosenMovie+"&search_precise=true",
    function(result){console.log(result);
        var myGame= result.results[0]  
        console.log(myGame)
        //display result info
       document.getElementById("outcome").innerHTML = "Your result is "+ chosenMovie + "  found as ( " +myGame.name+" )" ;
       
       document.getElementById("release").innerHTML = "Release Date " +myGame.releaseds
       document.getElementById("runtime").innerHTML = "metascore " +myGame.metacritic
       
       //document.getElementById("img").src =myGame.short_screenshots[1].image
       //document.getElementById("img0").src =myGame.short_screenshots[2].image
       document.getElementById("chooser").style.backgroundImage =  "url("+myGame.background_image+")";
       //clear rating info
       document.getElementById("ratings").innerHTML = " "
       // gets all ratings results 
       console.log(result.results[0].metacritic);
        $.each(result.Ratings, function(index, value) {
               var para = document.createElement("P");                 // Create a <p> element
               para.innerHTML = value.Source + ":  " + value.Value;                // Insert text
               document.getElementById("ratings").appendChild(para);
   
                        });
       var thumbnailimage = document.createElement('a');
       thumbnailimage.href=myGame.short_screenshots[1].image;
       var img = document.createElement("img")
       img.setAttribute("class","specialImg")
       img.src=myGame.short_screenshots[1].image;
       thumbnailimage.appendChild(img);
       document.getElementById("thumbnail1").appendChild(thumbnailimage);


       var thumbnailimage = document.createElement('a');
       thumbnailimage.href=myGame.short_screenshots[2].image;
       var img = document.createElement("img")
       img.setAttribute("class","specialImg")
       img.src=myGame.short_screenshots[2].image;
       thumbnailimage.appendChild(img);
       document.getElementById("thumbnail2").appendChild(thumbnailimage);

       var str = "Find out where to watch it here:";
       var result = str.link();
       document.getElementById("demo").innerHTML = "Find out more HERE";
       document.getElementById("demo").href = "https://rawg.io/games/"+myGame.id
       document.getElementById("deal").innerHTML = "Find deals for this game on PC @ \"IsThereAnyDeal.com\" ";
       document.getElementById("deal").href = "https://isthereanydeal.com/search/?q="+myGame.name                 


    });



   
    
}
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
