mapboxgl.accessToken = 'pk.eyJ1IjoiYWlkYW5hcm1zdHJvbmciLCJhIjoiY2xzam1tczhoMnJqMzJpbzZ4OWh0bmI4dyJ9.2pEogvW_3XlwcsMh4kMfCQ'; //Add default public map token from your Mapbox account
const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-79.384, 43.713], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

map.on('load', () => {
    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
    type: 'geojson',
    data: {
    "type": "FeatureCollection",
    "features": [
    {
    "type": "Feature",
    "properties": {
    "name": "Sidney Smith Hall"
    },
    "geometry": {
    "coordinates": [
    -79.39865237301687,
    43.662343395037766
    ],
    "type": "Point"
    }
    }
    ]
    }
    });
    map.addLayer({
    'id': 'uoft-pnt',
    'type': 'circle',
    'source': 'uoft-data',
    'paint': {
    'circle-radius': 6,
    'circle-color': '#B42222'
    }
    });
    });