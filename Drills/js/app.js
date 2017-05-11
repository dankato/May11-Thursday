// js/app.js


$(function(){
  $(".thumbnails").on('click', '.thumbnail', function(){ 
    var newCat = $(this).find('img').attr('src');
    $('.hero img').attr('src', newCat)
  });
});