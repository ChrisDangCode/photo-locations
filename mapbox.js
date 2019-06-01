/* const mapboxgl = require('mapbox-gl'); */
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Rhbmdjb2RlIiwiYSI6ImNqd2I1Mnc2MjBoMzk0YW9kZGt3cnZuaWQifQ.JzdvfTUTtVOQBOpXWC-uXg'

var map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
  zoom: 13
});

var marker = new mapboxgl.Marker()
.setLngLat([-21.9270884, 64.1436456])
.addTo(map);