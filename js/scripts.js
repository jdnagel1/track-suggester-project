$(document).ready(function(){
  // $('#').modal({backdrop: 'static', keyboard: false});
  $("#user-data").submit(function(event){
    event.preventDefault();
    var cssvar = $('#form-css').is(":checked");
    var csharpvar = $("#form-csharp").is(":checked");
    var litpref = $('#form-java input:radio:checked').val();
    $(".tracks").hide();

if (cssvar){
  $("#css").fadeIn();
} else if (csharpvar === false) {
  $("#csharp").fadeIn();
} else if (litpref === "classic") {
  $("#java1pic").show();
} else {
  $("#java2pic").fadeIn();
}

alert("hi");

  });
});
