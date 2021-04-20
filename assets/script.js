$(function(){
 
  $('.after > .fa-chevron-right').click(dopo);

  function dopo(){
    var on_active = $('img.active');
    var on_active_circle = $('li.active');

    on_active.removeClass('active');
    on_active_circle.removeClass('active');

    if(on_active.hasClass('last')){
      $('img.first').addClass('active');
      $('li.first').addClass('active');

    }else{
      on_active.next().addClass('active');
      on_active_circle.next().addClass('active');
    }
  }
     
  
  $('.before > .fa-chevron-left').click(prima);

  function prima(){
    var on_active = $('img.active');
    var on_active_circle = $('li.active');

    on_active.removeClass('active');
    on_active_circle.removeClass('active');

    if(on_active.hasClass('first')){
      $('img.last').addClass('active');
      $('li.last').addClass('active');

    }else{
      on_active.prev().addClass('active');
      on_active_circle.prev().addClass('active');
    }

  }

});