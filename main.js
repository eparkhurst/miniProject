
$(document).ready(function(){

  var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/39.753,-104.985";

  $('.submit').click(function(event){
    event.preventDefault();
    var $choice = $(".choice").val();
    if($choice === "New York"){
      // $('body').css("backgroundImage", 'url("http://www.easyoffer.net/p/new-york-wallpaper-hd-69q2.jpeg")');

    }else if ($choice ==="San Fransisco") {
      // $('body').css("backgroundImage", 'url("http://famebiography.net/wp-content/uploads/4212_san_francisco.jpg")');

    }else{
      // $('body').css("backgroundImage", "url('http://wfiles.brothersoft.com/d/denver-skyline-sunset_95803-1600x1200.jpg')");
      var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/39.753,-104.985";
    }
    console.log("working")
    $.ajax({
      url: $url,
      dataType:'jsonp',
      method: 'GET'
    }).done(function(data) {
      var $info = data.daily.summary;
      $('.summary').append($info.toString());
      console.log($info);
    });


  });

})


// "c25f96b2d58ce49fa402a5c9a491229a"
// "https://api.forecast.io/forecast/"
// String forecastUrl = "https://api.forecast.io/forecast/" +apiKey +
//                 "/" + latitude + "," + longitude;
