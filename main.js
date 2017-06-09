import DeckG,{LayerManager,Viewport,GeoJsonLayer} from 'deck.gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGl1aml1c2hlbmciLCJhIjoiY2owbHp4M3FmMDAyNTJxcDlqeWN0b3JnNSJ9.Pr8p9_jRlRD4I1w8-2V8NA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-123.0249569,49.2407190], // starting position
    zoom: 4 // starting zoom
});
map.addControl(new mapboxgl.FullscreenControl());
map.on('load', function () {
	let deckMap = new LayerManager({gl:document.getElementById('mycanvas').getContext('2d')});
	let viewport = new Viewport({width: 500, height: 500});
	deckMap.setViewport(viewport);
	$.get('vancouver-blocks.json',function(data){
		var geolayer = new GeoJsonLayer({
			id:'geojson-layer',
			data,
			filled: true,
			stroked: false,
			extruded: true
		  });
		  var mylayers = [];
		  mylayers.push(geolayer); 
		deckMap.updateLayers({newLayers:mylayers});
		console.log(deckMap);
		//deckMap.drawLayers({pass: 'reflection'});
		console.log(deckMap);
	});
	
});
