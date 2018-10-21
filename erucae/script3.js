//Accessing the date
var d = new Date();
var d1 = d.getDate();
var m;
if(d.getMonth()<10){
    m = "0"+d.getMonth();
} else{
    m = d.getMonth();
}
var y = d.getFullYear();

//Creating the request
var request = new XMLHttpRequest();

//Getting data from the DarkSky API & Launchibrary API
request.open("GET", "https://launchlibrary.net/1.4/launch/"y"-"m"-"d1"", true);
request.open("GET", "http://api.DarkSky.net/forecast/ea3d04efe3e2841e9b1e932242df67b5/")
