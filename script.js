mapboxgl.accessToken = 'pk.eyJ1IjoiYWlkYW5hcm1zdHJvbmciLCJhIjoiY2xzam1tczhoMnJqMzJpbzZ4OWh0bmI4dyJ9.2pEogvW_3XlwcsMh4kMfCQ'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-79.384, 43.713], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', () => {
    // Add a data source from a GeoJSON file
    map.addSource('parks', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/Adnarmstrng/lab2secondattempt/main/parks.geojson'

    });
    map.addLayer({
        'id': 'parks-point',
        'type': 'circle',
        'source': 'parks',
        'paint': {
            'circle-radius': 5,
            'circle-color': '#007cbf'
        }
    })

    // Add a data source from a Mapbox tileset
    map.addSource('censustracts', { // Create your own source ID
        'type': 'vector',
        'url': 'mapbox://aidanarmstrong.a2ueu202' // Update to your mapbox tileset ID
    });

    map.addLayer({
        'id': 'census', // Create your own layer ID
        'type': 'fill', // Note this is different to point data
        'source': 'censustracts', // Must match source ID from addSource Method
        'source-layer': 'torontoct-43nn0m', // Tileset NAME (diff to ID), get this from mapbox
        'paint': {
            'fill-color': '#888888', // Test alternative colours and style properties
            'fill-opacity': 0.4,
            'fill-outline-color': 'black'
        }

    },
        'parks'
    );
});