$( document ).ready(function() {


  $('.add-bookmark').on('click', function(){
    var title = $('.title-field').val();
    var url = $('.url-field').val();
    appendToSection(title, url);
    changeNumberBookmarks();

  });

  $('.title-field').on('keyup', function() {
    if ($('.title-field').val() !== '' && $('.url-field').val() !== '') {
      $('.add-bookmark').prop('disabled', false);
      $('.error-message').text('');
    } else {
      $('.add-bookmark').prop('disabled', true);
      $('.error-message').text('Error: One of the fields is empty. Please fill in both fields.');
    }
  });

  $('.url-field').on('keyup', function() {
    if ($('.url-field').val() !== '' && $('.title-field').val() !== '') {
      $('.add-bookmark').prop('disabled', false);
      $('.error-message').text('');
    } else {
      $('.add-bookmark').prop('disabled', true);
      $('.error-message').text('Error: One of the fields is empty. Please fill in both fields.');
    }
  });

  function appendToSection(title, url) {
    $('.bookmark-list').append(
      '<div class="container"><li class="title-style">' + title + '</li><li class="link-style">' + url + '</li><button class="read-button">Mark Read</button><button class="remove-bookmark-button">Remove Bookmarks</button></div>');
  }

  $('.bookmark-list').on('click', '.read-button', function(){
    $(this).parent().toggleClass('read');
    changeNumberBookmarks();
  });

  $('.bookmark-list').on('click', '.remove-bookmark-button', function(){
    $(this).parent().remove();
    changeNumberBookmarks();
  });

function changeNumberBookmarks() {
  $('.total-bookmarks').text($('.container').length);
  $('.read-bookmarks').text($('.read').length);
  $('.unread-bookmarks').text($('.container').length - $('.read').length);
}
});
