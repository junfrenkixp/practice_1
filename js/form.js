$(function(){
  $('.recall').on('click', function(){
    $('#form').css('display', 'flex');
  });

  $('#form').on('click', function(event){
    if(event.target === this) {
        $('#form').css('display', 'none');
    }
  });
  $('#button').on('click', function(){
    alert('На данный момент фича не работает =(');
  });
});