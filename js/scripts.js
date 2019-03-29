$(document).ready(function(){
  $("#coding-interest").submit(function(event){
    event.preventDefault();
    var cssvar = $('#form-css').is(":checked");
    var csharpvar = $("#form-csharp").is(":checked");
    var javavar = $('#form-java input:radio:checked').val();
    $(".tracks").hide();

if (cssvar){
  $("#css").fadeIn();
} else if (csharpvar === false) {
  $("#java").fadeIn();
} else if (javavar === "java1") {
  $("#csharp").show();
} else {
  $("java").fadeIn();
}


  });
});
