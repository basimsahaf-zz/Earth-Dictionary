"use strict"


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

var input = localStorage.getItem("searchinput");
document.getElementById("search-term").innerHTML = input;
document.getElementById("definition").innerHTML = httpGet(`http://ec2-54-69-73-17.us-west-2.compute.amazonaws.com:8000/notes/${input}`)["value"];




