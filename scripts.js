$( document ).ready(function() {

  $('.add-bookmark').on('click', function(){
    var title = $('.title-field').val();
    var url = $('.url-field').val();
    console.log(title);
    console.log(url);
    var bookmarkDiv = ('<div class="container"><li class="title-style">' + title + '</li><li class="link-style">' + url + '</li><button class="read-button">Mark Read</button><button class="remove-bookmark-button">Remove Bookmarks</button></div>');

    $('.bookmark-list').append(bookmarkDiv);
  });

  $('.bookmark-list').on('click', '.read-button', function(){
    $(this).parent().addClass('read');
  });

  $('.bookmark-list').on('click', '.remove-bookmark-button', function(){
    $(this).parent().remove();
  });



});
