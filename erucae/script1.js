var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

// set up the map
function initmap() {

    map = new L.Map('mapid');

    // create the tile layer with correct attribution
    var osmUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    var osmUrl="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png";
    var osmAttrib="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.<br> Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors";
    var osm = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 12, attribution: osmAttrib});

    // start the map somewhere
    map.setView(new L.LatLng(20, 0),2);
    map.addLayer(osm);

}
