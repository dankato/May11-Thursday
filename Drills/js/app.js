// js/app.js


$(function(){
  $(".thumbnails").on('click', '.thumbnail', function(){ 
  	// var findImg = $(this).find('img');
  	// var imgSrc = findImg.attr('src');
    var newCat = $(this).find('img').attr('src');
    $('.hero img').attr('src', newCat)
  });
});