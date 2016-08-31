$( document ).ready(function() {


  $('.add-bookmark').on('click', function(){
    var title = $('.title-field').val();
    var url = $('.url-field').val();
    appendToSection(title, url);
    changeNumberBookmarks();
    inputsBlankError();

  });

  $('.title-field').on('keyup', function() {
    inputsBlanksDisableButton();
  });

  $('.url-field').on('keyup', function() {
    inputsBlanksDisableButton();
  });

  function inputsBlankError() {
    if ($('.url-field').val() === '' || $('.title-field').val() === '') {
      $('.error-message').text('Error: One of the fields is empty. Please fill in both fields.');
    }
  }

  function inputsBlanksDisableButton() {
    if ($('.title-field').val() && $('.url-field').val()) {
      $('.add-bookmark').prop('disabled', false);
    } else {
      $('.add-bookmark').prop('disabled', true);
    }
  }

  function appendToSection(title, url) {
    $('.bookmark-list').append(
      '<div class="container"><li class="title-style">' + title + '</li><li class="link-style"><a href="' + url + '" target="_blank">' + url + '</a></li><button class="read-button">Mark Read</button><button class="remove-bookmark-button">Remove Bookmark</button></div>');
  }

  $('.bookmark-list').on('click', '.read-button', function(){
    $(this).parent().toggleClass('read');
    changeNumberBookmarks();
  });

  $('.bookmark-list').on('click', '.remove-bookmark-button', function(){
    $(this).parent().remove();
    changeNumberBookmarks();
  });

  $('.clear-read-bookmarks').on('click', function(){
    $('.read').remove();
    changeNumberBookmarks();
  });
function changeNumberBookmarks() {
  $('.total-bookmarks').text($('.container').length);
  $('.read-bookmarks').text($('.read').length);
  $('.unread-bookmarks').text($('.container').length - $('.read').length);
}
});
