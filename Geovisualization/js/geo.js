    //initialize with [lat,long],zoom
    var mymap = L.map('mapid').setView([24.9, 121.55506630165254],10);
  	
  
    L.tileLayer('https://wmts.nlsc.gov.tw/wmts/{id}/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://maps.nlsc.gov.tw/">國土測繪中心</a>',
          id: 'PHOTO2' //https://maps.nlsc.gov.tw/S09SOA/ EMAP:通用版電子地圖 EMAP2:通用版透明 PHOTO2:正射影像
    }).addTo(mymap);
     L.tileLayer('https://wmts.nlsc.gov.tw/wmts/{id}/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://maps.nlsc.gov.tw/">國土測繪中心</a>',
          id: 'EMAP2' //https://maps.nlsc.gov.tw/S09SOA/ EMAP:通用版電子地圖 EMAP2:通用版透明 PHOTO2:正射影像
    }).addTo(mymap);
    
  /*	
    L.tileLayer('https://wmts.nlsc.gov.tw/wmts/{id}/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://maps.nlsc.gov.tw/">國土測繪中心</a>',
          id: 'EMAP2' //https://maps.nlsc.gov.tw/S09SOA/ EMAP:通用版電子地圖 EMAP2:通用版透明 PHOTO2:正射影像
    }).addTo(mymap);
  */
    
    L.marker([25.1719043897479, 121.55506630165254]).addTo(mymap)
      .bindPopup("<b>大屯火山</b><br/>活火山").openPopup();
  
    L.circle([25.1719043897479, 121.55506630165254], 15000, {
      color: 'gray',
      fillColor: '#gray',
      fillOpacity: 0.5
    }).addTo(mymap).bindPopup("火山灰警戒區");
    L.circle([25.1719043897479, 121.55506630165254], 3000, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(mymap).bindPopup("火山碎屑流警戒區");
  
  
    var popup = L.popup();
  var a = 0;
    var lat_diff = 0;
    var lng_diff = 0;
    function onMapClick(e) {  
      lat_diff = e.latlng.lat-25.1719043897479;
      lng_diff = e.latlng.lng-121.55506630165254;
      a = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(lat_diff/2*Math.PI/180),2)+Math.cos(e.latlng.lat*Math.PI/180)*Math.cos(25.1719043897479*Math.PI/180)*Math.pow(Math.sin(lng_diff/2*Math.PI/180),2)))*6378.137
      popup
			.setLatLng(e.latlng)
			.setContent("你現在位在("+e.latlng.lat.toString()+","+e.latlng.lng.toString()+")"+"<br/>你距離大屯火山 " + a +"公里")
			.openOn(mymap);
    }
      mymap.on('click', onMapClick);
  