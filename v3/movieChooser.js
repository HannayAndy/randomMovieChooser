//To do:


//shortlist of imdb numbers
var movies = [];
//shortlist of movie titles
var movieNames = []; 
var dropdown = document.getElementById('choice-dropdown');

function resetDropDown(){
    //setting up dropdown
   
    dropdown.length = 0;
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose Movie';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;
    dropdown.size="1"
}




function pushData()
{
    // get value from the input text
    var inputText = document.getElementById('choice-dropdown').value;
    var selectElement = document.querySelector('#choice-dropdown');
    if( selectElement.options[selectElement.selectedIndex].id){
        output = selectElement.options[selectElement.selectedIndex].id;
        console.log(output)
        //inputText = inputText.replace(/ *\([^)]*\) */g, "");
        
        // append data to the array
        if(output && output !="undefined"){
            movies.push(output);
            movieNames.push(inputText)
            var pval = "";
            //display name of movies in shortlist
            for(i = 0; i < movies.length; i++)
        {
                pval = pval + movieNames[i] + "<br/>";
        }
        
            document.getElementById('pText').innerHTML = pval;
            resetDropDown(); 
    }
    
    }
    
  
   
}


function chooseMovie () {
    clearImages(); 
    var movieNum = Math.floor((Math.random() * movies.length ));

    var chosenMovie = (movies[movieNum]);
    //document.getElementById("movie").innerHTML = chosenMovie;

    
    $.getJSON("https://omdbapi.com/?i="+chosenMovie+"&apikey=58fa79c0&",
    function(result){console.log(result);  
        //display result info
       document.getElementById("outcome").innerHTML = "Your result is "+ result.Title 
       document.getElementById("release").innerHTML = "Release Date " +result.Released
       document.getElementById("runtime").innerHTML = "Runtime " +result.Runtime
       
       
       
       
       //clear rating info
       document.getElementById("ratings").innerHTML = " "
       // gets all ratings results 
       console.log(result.Ratings);
        $.each(result.Ratings, function(index, value) {
               var para = document.createElement("P");                 // Create a <p> element
               para.innerHTML = value.Source + ":  " + value.Value;                // Insert text
               document.getElementById("ratings").appendChild(para);
   
                        });

        
      
       
        createLinkedImages(result.Title, chosenMovie, result.Poster); 
     
    });
}

function createLinkedImages(movieTitle, movieNumber, poster){
    
    //poster image and link
    var mainlink = document.createElement('a')
    mainlink.href= "https://www.justwatch.com/au/search?q="+movieTitle;
    const mainimg = new Image(400, 600); // width, height
    mainimg.src = poster; 
    mainlink.appendChild(mainimg);
    document.getElementById("img").appendChild(mainlink); 
    
    //justwatch
    var str = "Find out where to watch it here:";
    var jlink = str.link("https://www.justwatch.com/au/search?q="+movieTitle );
    document.getElementById("demo").innerHTML = jlink;
    var jwlink = document.createElement('a')
    jwlink.href= "https://www.justwatch.com/au/search?q="+movieTitle;
    const jwimg = new Image(200, 200); // width, height
    jwimg.src = "JustWatch.png"; 
    jwlink.appendChild(jwimg)
    document.getElementById("just_watch").appendChild(jwlink); 
    
    var str = "Reviews, Ratings and More:";
    document.getElementById("others").innerHTML = str;

    //leterboxd
    var link = document.createElement('a')
    link.href= "https://letterboxd.com/search/"+movieNumber;
    const limg = new Image(200, 100); // width, height
    limg.src = "letterboxd-logo-v-neg-rgb-1000px.png"; 
    link.appendChild(limg)
    document.getElementById("ltrbimg").appendChild(link);                 
    
    //rotten tomatoes
    var rtlink = document.createElement('a')
    rtlink.href= "https://www.rottentomatoes.com/search?search="+movieTitle;
    const rtimg = new Image(200, 100); // width, height
    rtimg.src = "rotom.png"; 
    rtlink.appendChild(rtimg)
    document.getElementById("rotten").appendChild(rtlink); 
    
    //imdb
    var link = document.createElement('a')
    link.href= "https://www.imdb.com/title/"+movieNumber;
    var img = new Image(200, 100); // width, height
    img.src = "imdb.png"; 
    link.appendChild(img)
    document.getElementById("imdb").appendChild(link);   

}

function clearImages(){
        const imgSections = [ "imdb", "rotten", "ltrbimg", "just_watch", "img"]
        imgSections.forEach(element => document.getElementById(element).innerHTML = "" ); 
    
}

function filterFunction() {

    dropdown.length = 0;
    var input, filter, i;
    input = document.getElementById("myInput");
    filter = input.value.trim();

        $.getJSON("https://omdbapi.com/?s="+filter+"&apikey=58fa79c0&",
    function(result)
    {
        console.log(result); 
        if (result.Response=="False"){ 
            option = document.createElement('option');
            option.text = "Movie not found!"; 
            dropdown.add(option);
        } else {
            for (i = 0; i < result.Search.length; i++) {
                
                option = document.createElement('option');
                option.text = result.Search[i].Title + " (" + result.Search[i].Year + ")" ;
                
                option.id = result.Search[i].imdbID;
                //console.log(option.id);
                dropdown.add(option);
                dropdown.size=result.Search.length;
            }
        }
    })}


