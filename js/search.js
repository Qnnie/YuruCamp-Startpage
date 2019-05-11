String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}

function search(query){
    switch(query.substr(0, 2)){
        case "-d":
            query = query.substr(3);
            window.location = "https://duckduckgo.com/?q=" +
            query.replaceChars(" ", "+");
            break;
                
        case "-r":
            query = query.substr(3);
            window.location = "https://www.reddit.com/search?q=" +
            query.replaceChars(" ", "+");
            break;

        case "-y":
            query = query.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            query.replaceChars(" ", "+");
            break;

        case "-k":
            query = query.substr(3);
            window.location =
            "https://kissanime.ru/Anime/" +
            query.replaceChars(" ", "%20");
            break;
        default:
            window.location="https://www.google.fr/search?q=" +
            query.replaceChars("", "+");
    }
}

window.onload = function(){
// search
searchinput = document.getElementById("searchbox");
if(!!searchinput){
    searchinput.addEventListener("keypress", function(a){
        var key = a.keyCode;
        if(key == 13){
            var query = this.value;
            search(query);
        }
    });
}
// jump to search when tab is pressed
var search_sqr = document.getElementById("search_sqr");
}