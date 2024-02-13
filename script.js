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
})