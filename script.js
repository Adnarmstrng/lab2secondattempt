mapboxgl.accessToken = 'pk.eyJ1IjoiYWlkYW5hcm1zdHJvbmciLCJhIjoiY2xzam1tczhoMnJqMzJpbzZ4OWh0bmI4dyJ9.2pEogvW_3XlwcsMh4kMfCQ'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
container: 'my-map', //this ID points to my map container so that CSS can display this across the whol website
style: 'mapbox://styles/mapbox/streets-v12', //this is a street style but I could use any style
center: [-79.375, 43.712], // starting position [lng, lat]
zoom: 9, // starting zoom
});

map.on('load', () => {
//This is a geojson I found on opendata canada showing all of the parks in the GTA
map.addSource('parks', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/Adnarmstrng/lab2secondattempt/main/parks.geojson' 
   //This links strait to my github
    });
    map.addLayer({
    'id': 'parks-point', //new unique park point id
    'type': 'circle',
    'source': 'parks',
    'paint': {
    'circle-radius': 5,
    'circle-color': '#000000'
    }
    });

//compare the location of parks over the census tracts
map.addSource('censustracts', { //unique ID for census tracts
    'type': 'vector',
    'url': 'mapbox://aidanarmstrong.a2ueu202' //link to my mpabox tileset
    });
    map.addLayer({
    'id': 'ct', //unique vector tilset ID to customize this layer
    'type': 'fill', 
    'source': 'censustracts', //referencing source ID
    'source-layer': 'torontoct-43nn0m', //name of source on Mapbox
    'paint': {
    'fill-color': '#00FF00', 
    'fill-opacity': 0.1,
    'fill-outline-color': 'black'
    },
    
    },
    );
})