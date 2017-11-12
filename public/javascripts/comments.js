$(document).ready(function(){
 $('#deleteComments').click(function(){
var url="address";
$.ajax({
url:url,
type:"DELETE",
success: function(data,textStatus){
everything="";
      $("#comments").html(everything);
$("#json").text("");
$("#done").html(textStatus)}
})
});
 $("#postComment").click(function(){
      var myobj = {Name:$("#name").val(),Phone:$("#phone").val(),Email:$("#email").val(),Photo:$('#photo').val(),Address:$("#address").val()};
      jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
$("#comments").html("Success!");
var url = "address";
$.ajax({
url:url,
type: "POST",
data: jobj,
contentType: "application/json; charset=utf-8",
success: function(data,textStatus) {
}
})
});
    $("#getComments").click(function() {
    $.getJSON('address', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var comment in data) {
        com = data[comment];
        everything += "<li> Address: " + com.Address + " -- Name: " + com.Name + "</li>";
      }
      everything += "</ul>";
      $("#comments").html(everything);
    })
  })
});
