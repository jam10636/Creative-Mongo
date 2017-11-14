$(document).ready(function(){
$('#deleteComments').click(function(){
var checkbox1=['comment'];
var url="address";
jobj = JSON.stringify(checkbox1);
$.ajax({
url:url,
data:jobj,
type:"DELETE",
contentType: "application/json; charset=utf-8",
success: function(data,textStatus){
everything="";
$("#comments").html(everything);
$("#json").text("");
$("#done").html(textStatus)}
})
});
 $("#postComment").click(function(){
var imgurl;	
if($('#photo').val()=="")
	{
imgurl="http://funny-pics.co/wp-content/uploads/Funny-Alpaca-Face.jpg"
}
else
{
imgurl=$('#photo').val()
}
      var myobj = {Check:false,Name:$("#name").val(),Phone:$("#phone").val(),Email:$("#email").val(),Photo:imgurl,Address:$("#address").val()};
      jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
var url = "address";
$.ajax({
url:url,
type: "POST",
data: jobj,
contentType: "application/json; charset=utf-8",
success: function(data,textStatus) {
}
});
 $.getJSON('address', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
        everything+='<div class="contact">' +
            '<div>' +
              '<span class="contactTitle">' +
                '<img src="'+com.Photo+'"/>' +
              '</span>' +
              '<span class="contactTitle">' +
                '<h4>'+
                com.Name+'</h4>' +
              '</span>' +
                 '</div>' +
            com.Phone +'<br>'+
            '<a href="mailto:'+com.Email+'">'+com.Email+'</a><br>' +
            com.Address+'<br>' +
        '<input class="checkedbox" type="checkbox" id='+com._id+'>'+
	'</div>'}
        everything += "</ul>";
        $("#comments").html(everything);

});
});
$("#getComments").click(function() {
     $.getJSON('address', function(data) {
        console.log(data);
        var everything = "<ul>";
	var count=0;
        for(var comment in data) {
          com = data[comment];
	everything+='<div class="contact">' +
            '<div>' +
              '<span class="contactTitle">' +
                '<img src="'+com.Photo+'"/>' +
              '</span>' +
              '<span class="contactTitle">' +
                '<h4>'+
 		com.Name+'</h4>' +
              '</span>' +
                 '</div>' +
            com.Phone +'<br>'+
            '<a href="mailto:'+com.Email+'">'+com.Email+'</a><br>' +
            com.Address+'<br>' +
            '<input class="checkedbox" type="checkbox" id='+com._id+'>'+
         '</div>'};
        everything += "</ul>";
        $("#comments").html(everything);
   })
});
$('#delete').click(function(){
var checkbox=[];
$.getJSON('address', function(data) {
 $(".checkedbox").each(function()
        {
            if($(this).is(':checked'))
            {
		checkbox.push(this.id);
		}
        })
jobj = JSON.stringify(checkbox);
var url = "address";
$.ajax({
url:url,
type: "DELETE",
data: jobj,
contentType: "application/json; charset=utf-8",
success: function(data,textStatus) {
}

});
$.getJSON('address', function(data) {
        console.log(data);
        var everything = "<ul>";
        for(var comment in data) {
          com = data[comment];
        everything+='<div class="contact">' +
            '<div>' +
              '<span class="contactTitle">' +
                '<img src="'+com.Photo+'"/>' +
              '</span>' +
              '<span class="contactTitle">' +
                '<h4>'+
                com.Name+'</h4>' +
              '</span>' +
                 '</div>' +
            com.Phone +'<br>'+
            '<a href="mailto:'+com.Email+'">'+com.Email+'</a><br>' +
            com.Address+'<br>' +
        '<input class="checkedbox" type="checkbox" id='+com._id+'>'+
	'</div>'}
        everything += "</ul>";
        $("#comments").html(everything);

});
});
});
$('#delete').DataTable().ajax.reload();
});
