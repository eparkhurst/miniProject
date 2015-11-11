
$(document).ready(function(){

  var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/39.753,-104.985";

  $('.submit').click(function(event){
    event.preventDefault();
    var $choice = $(".choice").val();
    $(".weatherInfo").css("display","block")
    if($choice === "New York"){
      $('body').css("backgroundImage", 'url("http://www.easyoffer.net/p/new-york-wallpaper-hd-69q2.jpeg")');
        var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/40.713,-74.001";
    }else if ($choice ==="San Fransisco") {
      $('body').css("backgroundImage", 'url("http://famebiography.net/wp-content/uploads/4212_san_francisco.jpg")');
        var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/37.783,-122.417";
    }else{
      $('body').css("backgroundImage", "url('http://hempbeach.com/wp-content/uploads/2013/08/Dnever-at-night-hbtv-hemp-beach-tv.jpg')");
      var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/39.753,-104.985";
    }
    console.log("working")
    $.ajax({
      url: $url,
      dataType:'jsonp',
      method: 'GET'
    }).done(function(data) {
      var $temp = data.currently.apparentTemperature;
      var $summary = data.daily.summary;
      $('.summary').text($summary.toString());
      console.log(data);
    });


  });

})


// "c25f96b2d58ce49fa402a5c9a491229a"
// "https://api.forecast.io/forecast/"
// String forecastUrl = "https://api.forecast.io/forecast/" +apiKey +
//                 "/" + latitude + "," + longitude;
