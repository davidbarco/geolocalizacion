function geoFindMe() {
    var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
  
      var img = new Image();
      img.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
  
      output.appendChild(img);
    };
  
    function error() {
      output.innerHTML = "Unable to retrieve your location";
    };
  
    output.innerHTML = "<p>Locating…</p>";
  
    navigator.geolocation.getCurrentPosition(success, error);
  }
  
  
  
  
  
  
  function iniciarMap(){
    
      var coord = {lat:3.388936483321268,lng: -76.55236950799191};
      var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 16,
        center: coord
      });
      var marker = new google.maps.Marker({
        position: coord,
        map: map
      });
  }
  
  