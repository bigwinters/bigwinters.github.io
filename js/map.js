var map, Popup, mancFinlandPath, mancYorkEdinPath, mancDublinBelfastPath;
$('.popUps').click(function(){
  var popUpClicked = event.target.id
  popUpClicked+=".setMap(null)";
  var tmpFunc = new Function(popUpClicked);
  tmpFunc();
});

/* Triggering Denmark image */

$(document).ready(function(){ 
  $('#showFerry').click(function(){
    $('#ferryHold').show();
    puttgardenPopUp.setMap(null);
    hamburgStartPopUp.setMap(null);
    rodbyPopUp.setMap(map);
    copenhagenPopUp.setMap(map);
  });
});



/** Initializes the map and the custom popup. */
function initMap() {
  definePopupClass();

  manchesterPopUp = new Popup(
    new google.maps.LatLng(53.455203, -2.114613),
    document.getElementById('manchesterPopUp')
  );  

  holyheadPopUp = new Popup(
    new google.maps.LatLng(53.309441, -4.633038),
    document.getElementById('holyheadPopUp')
  );

  dublinPopUp = new Popup(
    new google.maps.LatLng(53.349805, -6.260310),
    document.getElementById('dublinPopUp')
  );  

  belfastPopUp = new Popup(
    new google.maps.LatLng(54.597285, -5.930120),
    document.getElementById('belfastPopUp')
  );

  dundalkPopUp = new Popup(
    new google.maps.LatLng(53.997945, -6.405957),
    document.getElementById('dundalkPopUp')
  );

  causewayPopUp = new Popup(
    new google.maps.LatLng(55.2341007,-6.5281956),
    document.getElementById('causewayPopUp')
  );

  yorkPopUp = new Popup(
    new google.maps.LatLng(53.959965,-1.087298),
    document.getElementById('yorkPopUp')
  );

  newcastlePopUp = new Popup(
    new google.maps.LatLng(54.978252,-1.617780),
    document.getElementById('newcastlePopUp')
  );

  edinPopUp = new Popup(
    new google.maps.LatLng(55.9483683,-3.1932088),
    document.getElementById('edinPopUp')
  );

  codeHostelPopUp = new Popup(
    new google.maps.LatLng(55.952576,-3.1994794),
    document.getElementById('codeHostelPopUp')
  );

  edinInfoPopUp = new Popup(
    new google.maps.LatLng(55.9500323,-3.1808723),
    document.getElementById('edinInfoPopUp')
  );

  edinGreenPopUp = new Popup(
    new google.maps.LatLng(55.9548731,-3.1893161),
    document.getElementById('edinGreenPopUp')
  );

  parisPopUp = new Popup(
    new google.maps.LatLng(48.856614, 2.352222),
    document.getElementById('parisPopUp')
  );

  colognePopUp = new Popup(
    new google.maps.LatLng(50.937531, 6.960279),
    document.getElementById('colognePopUp')
  );

  berlinPopUp = new Popup(
    new google.maps.LatLng(52.520007, 13.404954),
    document.getElementById('berlinPopUp')
  );

  hamburgPopUp = new Popup(
    new google.maps.LatLng(53.551085, 9.993682),
    document.getElementById('hamburgPopUp')
  );

  hamburgStartPopUp = new Popup(
    new google.maps.LatLng(53.551085, 9.993682),
    document.getElementById('hamburgStartPopUp')
  );

  puttgardenPopUp = new Popup(
    new google.maps.LatLng(54.496598, 11.212333),
    document.getElementById('puttgardenPopUp')
  );

  rodbyPopUp = new Popup(
    new google.maps.LatLng(54.654306, 11.353990),
    document.getElementById('rodbyPopUp')
  );

 copenhagenPopUp = new Popup(
    new google.maps.LatLng(55.676097, 12.568337),
    document.getElementById('copenhagenPopUp')
  );    

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 53.455203, lng: -2.114613},
    zoom: 6,
  });

  var mancDublinBelfast = [
          {lat: 53.455203, lng: -2.114613},
          {lat: 53.193392, lng: -2.893075},
          {lat: 53.227390, lng: -4.129263},
          {lat: 53.309441, lng: -4.633038},
          {lat: 53.349805, lng: -6.260310},
          {lat: 53.997945, lng: -6.405957},
          {lat: 54.597285, lng: -5.930120}
        ];

  mancDublinBelfastPath = new google.maps.Polyline({
          path: mancDublinBelfast,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
  //Irish trip end

    var mancYorkEdin = [
          {lat: 53.455203, lng: -2.114613},
          {lat: 53.959965, lng: -1.087298},
          {lat: 54.978252, lng: -1.617780},
          {lat: 55.953252, lng: -3.188267}
        ];

  mancYorkEdinPath = new google.maps.Polyline({
          path: mancYorkEdin,
          geodesic: true,
          strokeColor: '#0000FF',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
  //Scotland trip end

      var mancFinland = [
          {lat: 53.455203, lng: -2.114613},
          {lat: 51.507351, lng: -0.127758},
          {lat: 48.856614, lng: 2.352222},
          {lat: 50.937531, lng: 6.960279},
          {lat: 52.520007, lng: 13.404954},
          {lat: 53.551085, lng: 9.993682},
          {lat: 55.676097, lng: 12.568337}
        ];

      var hamburgToFerry = [
          {lat: 53.551085, lng: 9.993682},
          {lat: 53.865467, lng: 10.686559},
          {lat: 54.069532, lng: 10.770356},
          {lat: 54.290469, lng: 10.889923},
          {lat: 54.496598, lng: 11.212333}
      ]

      var Ferry = [
        {lat: 54.496598, lng: 11.212333},
        {lat: 54.654306, lng: 11.353990}
      ];

      var ferryToCopenhagen = [
        {lat: 54.654306, lng: 11.353990},
        {lat: 54.774717, lng: 11.507370},
        {lat: 54.862362, lng: 11.911337},
        {lat: 54.998476, lng: 12.026348},
        {lat: 55.257987, lng: 11.886108},
        {lat: 55.457526, lng: 12.182181},
        {lat: 55.646016, lng: 12.297937},
        {lat: 55.676097, lng: 12.568337}
      ];

  mancFinlandPath = new google.maps.Polyline({
          path: mancFinland,
          geodesic: true,
          strokeColor: '#009933',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

 hamburgFerryPath = new google.maps.Polyline({
          path: hamburgToFerry,
          geodesic: true,
          strokeColor: '#f44b42',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

 ferryPath = new google.maps.Polyline({
          path: Ferry,
          geodesic: true,
          strokeColor: '#009933',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

 ferryToCopenhagenPath = new google.maps.Polyline({
          path: ferryToCopenhagen,
          geodesic: true,
          strokeColor: '#f44b42',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });



  manchesterPopUp.setMap(map);
} //end of intiMap()

/** Defines the Popup class. */
function definePopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup = function(position, content) {
    this.position = position;

    content.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    pixelOffset.appendChild(content);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
        Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
        'block' :
        'none';

    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px';
      this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
     'pointerdown']
        .forEach(function(event) {
          anchor.addEventListener(event, function(e) {
            e.stopPropagation();
          });
        });
  };
}

function removeAllPopUps (){
  belfastPopUp.setMap(null);
  dublinPopUp.setMap(null);
  holyheadPopUp.setMap(null);
  manchesterPopUp.setMap(null);
  dundalkPopUp.setMap(null);
  yorkPopUp.setMap(null);
  newcastlePopUp.setMap(null);
  edinPopUp.setMap(null);
}

function irelandTrip(){
  $('#ferryHold').hide();
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.105301, lng: -6.252078},
    zoom: 7,
  });
  mancFinlandPath.setMap(null);
  mancYorkEdinPath.setMap(null);
  mancDublinBelfastPath.setMap(map);
  holyheadPopUp.setMap(map);
  belfastPopUp.setMap(map);
  dublinPopUp.setMap(map);
  dundalkPopUp.setMap(map);  
}

function causewayZoom(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.240807, lng: -6.511555},
    zoom: 13,
  });
  causewayPopUp.setMap(map);
}

function causewayStreetView(){
  panorama = new google.maps.StreetViewPanorama(
            document.getElementById('map'),
            {
              position: ({lat: 55.240807, lng: -6.511555}),
              pov: {heading: 300, pitch: 0},
              zoom: 1
            });
}

function scotlandTrip(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.978252, lng: -1.617780},
    zoom: 6,
  });
  $('#ferryHold').hide();
  mancFinlandPath.setMap(null);
  mancYorkEdinPath.setMap(map);
  mancDublinBelfastPath.setMap(null);
  yorkPopUp.setMap(map);
  newcastlePopUp.setMap(map);
  edinPopUp.setMap(map);
}

function edinZoom(){
   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.953252, lng: -3.188267},
    zoom: 15,
  });
  codeHostelPopUp.setMap(map);
  edinInfoPopUp.setMap(map);
  edinGreenPopUp.setMap(map);
}

function finlandTrip(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.676097, lng: 12.568337},
    zoom: 4,
  });
  $('#ferryHold').hide();
  mancFinlandPath.setMap(map);
  mancYorkEdinPath.setMap(null);
  mancDublinBelfastPath.setMap(null);
  parisPopUp.setMap(map);
  colognePopUp.setMap(map);
  berlinPopUp.setMap(map);
  hamburgPopUp.setMap(map);  
}

function ferryZoom(){
   map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.727543, lng: 11.464930},
    zoom: 7,
  });
   hamburgFerryPath.setMap(map);
   ferryPath.setMap(map);
   ferryToCopenhagenPath.setMap(map);
   hamburgStartPopUp.setMap(map);
   puttgardenPopUp.setMap(map);
}

function showHold(){
  $('#ferryHold').toggle();
}
