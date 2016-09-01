$( document ).ready(function() {

  $('.add-bookmark').on('click', function(){
    var title = $('.title-field').val();
    var url = $('.url-field').val();
    inputsBlankError();
    if(urlValidation() === false) {return;}
    appendToSection(title, url);
    changeNumberBookmarks();
    clearInputFields();
  });

  $('body').keypress(function(event) {
    if (event.which == 13) {
      var title = $('.title-field').val();
      var url = $('.url-field').val();
      if(urlValidation() === false) {return;}
      if(inputsBlankError() === true) {return;}
      appendToSection(title, url);
      changeNumberBookmarks();
      clearInputFields();
    }
  });

  $('.title-field').on('keyup', function() {
    inputsBlanksDisableButton();
  });

  $('.url-field').on('keyup', function() {
    inputsBlanksDisableButton();
  });

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

  function clearInputFields() {
    $('.title-field').val('');
    $('.url-field').val('');
  }

  function inputsBlankError() {
    if ($('.url-field').val() === '' || $('.title-field').val() === '') {
      $('.error-message').text('Error: One of the fields is empty. Please fill in both fields.');
      return true;
    } else {
      $('.error-message').text('');
    }
  }

  function urlValidation() {
    var urlRegEx = new
    RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (urlRegEx.test($('.url-field').val())) {
      return true;
    } else {
      $('.error-message').text('Please enter a valid URL.');
      return false;
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
      '<div class="container"><li class="title-style">' + title + '</li><li class="link-style"><a href="' + url + '" target="_blank">' + url + '</a></li><button class="read-button">Mark Read</button><button class="remove-bookmark-button">Remove Bookmark</button></div>'
    );
  }

  function changeNumberBookmarks() {
    $('.total-bookmarks').text($('.container').length);
    $('.read-bookmarks').text($('.read').length);
    $('.unread-bookmarks').text($('.container').length - $('.read').length);
  }
});
