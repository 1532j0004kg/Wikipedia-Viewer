var result;
$(document).ready(function(){
  $("button").slideDown("slow");
 $("button").click(function(){
   //$(".row").css({"display":"table" , "width": "100%"});
   $(".col-xs-4").css({"display":"table-cell"});
   var title = $("#search").val();
   if(!title)
     {
       $(".col-xs-4").css("display","none");
       alert("Please Enter Some Text , Thank You!!!")
     }
  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search="+title+"&limit=10&namespace=0&format=json&origin=*",
  function(data){

    if(!data[1][0])
    {
    $(".1").html("<h1>No such result found here !!!</h1>");
    }
    if(!data[1][1])
    {
     $(".2").html("<h1>No such result found here !!!</h1>");
    }
    if(!data[1][2])
    {
     $(".3").html("<h1>No such result found here !!!</h1>");
    }
    if(!data[1][3])
    {
     $(".4").html("<h1>No such result found here !!!</h1>");

    }
    if(!data[1][4])
    {
     $(".5").html("<h1>No such result found here !!!</h1>")
    }
    if(!data[1][5])
    {
     $(".6").html("<h1>No such result found here !!!</h1>")
    }
    if(!data[1][6])
    {
     $(".7").html("<h1>No such result found here !!!</h1>")
    }
    if(!data[1][7])
    {
     $(".8").html("<h1>No such result found here !!!</h1>")
    }
    if(!data[1][8])
    {
     $(".9").html("<h1>No such result found here !!!</h1>")
    }
    if(!data[1][9])
    {
     $(".10").html("<h1>No such result found here !!!</h1>")
    }

    if(data[2][0])
      {
    var result = "<div class='text-justify'>"+"<p>"+data[1][0]+"</p>"+"<br>"+"<h4>"+data[2][0]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a href="+data[3][0]+" target='_blank'  id ='access'>"+"Click for full read"+"</a>"+"</h3>"+"</div>";
    $(".1").html(result);
      }
   if(data[2][0] == "")  {
      $(".1").html("<div class='text-justify'>"+"<p>"+data[1][0]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][0]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

    if(data[2][1])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][1]+"</p>"+"<br>"+"<h4>"+data[2][1]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][1]+" target='_blank'>Read more</a>"+"</h3>"+"</div>";
    $(".2").html(result);
      }
    if(data[2][1] == "")
      {
       $(".2").html("<div class='text-justify'>"+"<p>"+data[1][1]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][1]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
      }

    if(data[2][2])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][2]+"</p>"+"<br>"+"<h4>"+data[2][2]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][2]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".3").html(result);
      }
   if(data[2][2] == ""){
      $(".3").html("<div class='text-justify'>"+"<p>"+data[1][2]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][2]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

    if(data[2][3])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][3]+"</p>"+"<br>"+"<h4>"+data[2][3]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][3]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".4").html(result);
      }
    if(data[2][3] == ""){
      $(".4").html("<div class='text-justify'>"+"<p>"+data[1][3]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][3]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

       if(data[2][4])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][4]+"</p>"+"<br>"+"<h4>"+data[2][4]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][4]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".5").html(result);
      }
    if(data[2][4] == ""){
      $(".5").html("<div class='text-justify'>"+"<p>"+data[1][4]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][4]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

       if(data[2][5])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][5]+"</p>"+"<br>"+"<h4>"+data[2][5]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][5]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".6").html(result);
      }
      if(data[2][5] == "")
      {
        $(".6").html("<div class='text-justify'>"+"<p>"+data[1][5]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][5]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
      }

       if(data[2][6])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][6]+"</p>"+"<br>"+"<h4>"+data[2][6]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][6]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".7").html(result);
      }
       if(data[2][6] == "") {
      $(".7").html("<div class='text-justify'>"+"<p>"+data[1][6]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][6]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

    if(data[2][7])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][7]+"</p>"+"<br>"+"<h4>"+data[2][7]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][7]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".8").html(result);
      }
       if(data[2][7] == "") {
      $(".8").html("<div class='text-justify'>"+"<p>"+data[1][8]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][8]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

       if(data[2][8])
      {
    var result ="<div class='text-justify'>"+"<p>"+data[1][8]+"</p>"+"<br>"+"<h4>"+data[2][8]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][8]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".9").html(result);
      }
       if(data[2][8] == "") {
      $(".9").html("<div class='text-justify'>"+"<p>"+data[1][8]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][8]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }

       if(data[2][9])
      {
  var result ="<div class='text-justify'>"+"<p>"+data[1][9]+"</p>"+"<br>"+"<h4>"+data[2][9]+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][9]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>";
    $(".10").html(result);
      }
       if(data[2][9] == "") {
      $(".10").html("<div class='text-justify'>"+"<p>"+data[1][9]+"</p>"+"<br>"+"<h4>"+"No description found! Click the below link to view the page."+"</h4>"+"<br>"+"<h3 id='readMore'>"+"<a id ='access' href="+data[3][9]+" target='_blank'>Click for full read</a>"+"</h3>"+"</div>");
    }
  });
  });
});
