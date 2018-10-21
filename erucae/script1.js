var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

// set up the map
function initmap() {

    map = new L.Map('mapid');

    // create the tile layer with correct attribution
    var osmUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    var osmAttrib="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors";
    var osm = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 12, attribution: osmAttrib});

    // start the map in South-East England
    map.setView(new L.LatLng(51.3, 0.7),9);
    map.addLayer(osm);

}
