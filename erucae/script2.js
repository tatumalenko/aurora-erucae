
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

// DEBUGGING
// document.getElementById("testh").innerHTML = m;
// document.getElementById("testh").innerHTML = "https://launchlibrary.net/1.4/launch/"+y+"-"+m+"-"+d1;


var currIcon = L.icon({
    iconUrl: "res/markerC.png", //#5E5E5E
    iconAnchor: [16, 32],
});
var histIcon = L.icon({
    iconUrl: "res/markerH.png", //#FF9300
    iconAnchor: [12,24],
});

//********** HISTORICAL DATA ************
//Getting data from the Launch Library API
// var request = new XMLHttpRequest();
// request.open("GET","https://launchlibrary.net/1.4/launch/1957-10-04/"+y+"-"+m+"-"+d1,true);
// request.onload = function() {
//     var data = JSON.parse(this.response);
//     if(request.status >= 200 && request.status < 400) {
//         data.launches.forEach(e1 => {
//             e1.location.pads.forEach(e2 => {
//                 const card = document.createElement("div");
//                 card.setAttribute("class", "card");
//                 const h1 = document.createElement("h1");
//                 h1.textContent = e2.name;
//                 container.appendChild(card);
//                 card.appendChild(h1);
//
//                 var x = parseFloat(e2.latitude,10);
//                 var y = parseFloat(e2.longitude,10);
//                 var ll = L.latLng(x,y);
//
//                 var marker = L.marker(ll, {icon: histIcon}).addTo(map);
//
//             })
//         })
//     } else {
//         console.log("error");
//     }
// }

//********** CURRENT/FUTURE DATA ************
//Getting data from the Launch Library API
var request = new XMLHttpRequest();
request.open("GET","https://launchlibrary.net/1.4/launch/next/50",true);
request.onload = function() {
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        data.launches.forEach(e1 => {
            e1.location.pads.forEach(e2 => {
                // const card = document.createElement("div");
                // card.setAttribute("class", "card");
                // const h1 = document.createElement("p");
                // h1.textContent = e2.name;
                // container.appendChild(card);
                // card.appendChild(h1);

                var x = parseFloat(e2.latitude,10);
                var y = parseFloat(e2.longitude,10);
                var ll = L.latLng(x,y);
                var marker = L.marker(ll, {icon: currIcon}).addTo(map).on("click", markerClick);

                var markerCopy = e2.name;
                marker.bindPopup(markerCopy);

                
                // I have no idea what this is doing...
                function markerClick(e){
                
                    var copy = "" + e1.name + "/n" + e1.windowstart + "/n" + e2.agencies.name;
                    const card = document.createElement("div");
                    card.setAttribute("class", "card");
                    const texts = document.createElement("p");
                    textx.textContent = copy;
                    container.appendChild(card);
                    card.appendChild(h1);
                }


            })
        })
    } else {
        console.log("error");
    }
}

request.send();

const sidebar = document.getElementById("sidebarid");
const container = document.createElement("div");
container.setAttribute("class","container");
sidebar.appendChild(container);

//create a marker with a popup

var marker = L.marker([51.09, -0.09]).addTo(map);
marker.bindPopup("<b>Rocket launch</b><br>Alright").openPopup();

// $mapContainer.on('map-container-resize', function () {
//    map.invalidateSize(); // doesn't seem to do anything
// });

$("a[href='#mapContainer']").on('shown.bs.tab', function(e) {
    map.invalidateSize();
});

setTimeout(function(){ map.invalidateSize()}, 400);

//create array of markers
