/* geolocation 위치 받아오기 */
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showPosition, handleError);
// } else {
//   alert("브라우저가 GeoLocation을 제공하지 않습니다");
// }

// function showPosition(position) {
//   alert("위도 : " + position.coords.latitude + "\n" +
//         "경도 : " + position.coords.longitude);
// }
// function handleError(error) {
//   alert(error.message);

/* 화면에 지도 띄우기 */
$(document).ready(function () {
  
  // 초기 위치 설정
  var startLatLng = new google.maps.LatLng(37.30981, 126.87560);
  $("#map_canvas").gmap({
    "center": startLatLng,
    "zoom": 15
  });
  
  // < 현위치 > 처리
  $("#current_location").click(function () {
    $("#map_canvas").gmap('getCurrentPosition', function (position, status) {
      // GeoLocation API의 getCurrentPosition 함수를 실행하겠 
      if (status === 'OK') {
        var latlng = new google.maps.LatLng(
          position.coords.latitude, // 위도
          position.coords.longitude // 경도
        );
        var markerBlue = "https://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png";
        $("#map_canvas").gmap("get", "map").panTo(latlng);
        $("#map_canvas").gmap("addMarker", {
          "position": latlng,
          "icon": markerBlue
        });
        var markerRed = "https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png";
        var curMarker = $("#map_canvas").gmap("addMarker", {
          "position": latlng,
          "icon": markerRed
        });
      } else {
        alert("현재 위치를 찾을 수 없습니다");
      }
    });
  });
});