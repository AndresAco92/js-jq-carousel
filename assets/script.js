$(function(){
 
  $('.after > .fa-chevron-right').click(dopo);

  function dopo(){
    var on_active = $('img.active');
    var on_active_circle = $('i.active_circle');

    on_active.removeClass('active');
    on_active_circle.removeClass('active_circle');

    if(on_active.hasClass('last')){
      $('img.first').addClass('active');
      $('i.first').addClass('active_circle');

    }else{
      on_active.next().addClass('active');
      on_active_circle.next().addClass('active_circle');
    }
  }

  $('.before > .fa-chevron-left').click(prima);

  function prima(){
    var on_active = $('img.active');
    on_active.removeClass('active');
    if(on_active.hasClass('first')){
      $('img.last').addClass('active');
    }else{
      on_active.prev('img').addClass('active');
    }

  }

});