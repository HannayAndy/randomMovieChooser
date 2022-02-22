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
    clearImages(); 
    var movieNum = Math.floor((Math.random() * movies.length ));

    var chosenMovie = (movies[movieNum]);
    //document.getElementById("movie").innerHTML = chosenMovie;

    
    $.getJSON("https://omdbapi.com/?t="+chosenMovie+"&apikey=58fa79c0&",
    function(result){console.log(result);  
        //display result info
       document.getElementById("outcome").innerHTML = "Your result is "+ chosenMovie ;
       document.getElementById("release").innerHTML = "Release Date " +result.Released
       document.getElementById("runtime").innerHTML = "Runtime " +result.Runtime
       
       
       var mainlink = document.createElement('a')
      
       mainlink.href= "https://www.justwatch.com/au/search?q="+chosenMovie;
       const mainimg = new Image(400, 600); // width, height
       mainimg.src = result.Poster; 
       mainlink.appendChild(mainimg)
         
       document.getElementById("img").appendChild(mainlink); 
       
       
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
       
       var jwlink = document.createElement('a')
      
       jwlink.href= "https://www.justwatch.com/au/search?q="+chosenMovie;
       const jwimg = new Image(200, 200); // width, height
       jwimg.src = "JustWatch.png"; 
       jwlink.appendChild(jwimg)
         
       document.getElementById("just_watch").appendChild(jwlink); 
       
       var str = "Reviews, Ratings and More:";
       document.getElementById("others").innerHTML = str;


       var link = document.createElement('a')
       link.href= "https://letterboxd.com/search/"+chosenMovie;
       const limg = new Image(200, 100); // width, height
       limg.src = "letterboxd-logo-v-neg-rgb-1000px.png"; 
       link.appendChild(limg)
         
       document.getElementById("ltrbimg").appendChild(link);                 
       
       var rtlink = document.createElement('a')
       rtlink.href= "https://www.rottentomatoes.com/search?search="+chosenMovie;
       const rtimg = new Image(200, 100); // width, height
       rtimg.src = "rotom.png"; 
       rtlink.appendChild(rtimg)
         
       document.getElementById("rotten").appendChild(rtlink); 
       
       var link = document.createElement('a')
       link.href= "https://www.imdb.com/find?q="+chosenMovie;
       var img = new Image(200, 100); // width, height
       img.src = "imdb.png"; 
       link.appendChild(img)
         
       document.getElementById("imdb").appendChild(link);                  
     

     


    });



   
    
}



function clearImages(){
        const imgSections = [ "imdb", 
            "rotten", 
            "ltrbimg", 
            "just_watch", 
            "img"]
    imgSections.forEach(element => document.getElementById(element).innerHTML = "" ); 
    
}

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
