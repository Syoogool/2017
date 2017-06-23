function getPosition() {
  var output = document.getElementById('out');

  if (!navigator.geolocation) { // 1.检测地理服务是否可用
    output.innerHTML = '<p>你的浏览器不支持地理位置</p>';
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>latitude is ' + latitude + ' + <br>longitude is' + longitude + '</p>'

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "无法获取您的位置";
  }

  output.innerHTML = "<p>Locating...</p>";

  navigator.geolocation.getCurrentPosition(success, error);

  // 2.获取当前定位
  // watchPosition/getCurrentPosition(geoSucess,geoError,geoOptions){}
  // 这两个函数都接受三个参数，成功回调函数（必须），错误回调函数，可选参数
  navigator.geolocation.getCurrentPosition(function(position) {
    getPosition(position.coords.latitude, position.coords.longitude);
  });

  // 3.监控定位
  var watchID = navigator.geolocation.watchPosition(function(position) {
    getRefreshPosition(position.coords.latitude, position.coords.longitude);
  })
  // 取消监视
  navigator.geolocation.clearWatch(watchID);
}
