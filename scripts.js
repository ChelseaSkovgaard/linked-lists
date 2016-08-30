$( document ).ready(function() {

  $('.add-bookmark').on('click', function(){
    var title = $('.title-field').val();
    console.log(title);
    $('.bookmark-list').append('<li>' + title + '</li>');
  });


});
