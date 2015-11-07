
$(document).ready(function(){
  // $('.submit').click(function(event){
  //   event.preventDefault();
  //   var $choice = $(".choice").val();
    var $url = "https://api.forecast.io/forecast/c25f96b2d58ce49fa402a5c9a491229a/39.753,-104.985";
    // console.log($choice)
    // $.get($url,function(data){
    //   console.log(data)
    //  })
    console.log("working")
    $.ajax({
      url: $url,
      dataType:'jsonp',
      method: 'GET'
    }, function(data) {
      console.log(data)
    });
    console.log("data")
  // })
})


// "c25f96b2d58ce49fa402a5c9a491229a"
// "https://api.forecast.io/forecast/"
// String forecastUrl = "https://api.forecast.io/forecast/" +apiKey +
//                 "/" + latitude + "," + longitude;
