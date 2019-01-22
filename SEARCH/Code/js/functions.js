$(document).ready(function(){

  var $input = $('input');
  var $web_content = $('.web-content');
  var $loader_content = $('.loader');


  document.getElementById('input').addEventListener('input', function (evt) {
    // $web_content.fadeOut(300, function(){
    //   $loader_content.fadeIn(300);
    // })

    $web_content.each(function(item){
      $(this).delay(900*item).fadeOut(300)
    }, $loader_content.fadeIn(300));

    if($input.val() === ""){
      $loader_content.fadeOut(300, function(){
        $web_content.fadeIn(300);
      })
    }
  });



});//end of document ready
