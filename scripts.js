$( document ).ready(function() {


  $('.add-bookmark').on('click', function(){
    var title = $('.title-field').val();
    var url = $('.url-field').val();
    console.log(title);
    console.log(url);
    appendToSection();
  });

  function appendToSection(title, url) {
    if ($('.title-field').val() === '' || $('.url-field').val() === '') {
      $('.error-message').text('Error: One of the fields is empty. Please fill in both fields.');
    } else {
    $('.bookmark-list').append(
      '<div class="container"><li class="title-style">' + title + '</li><li class="link-style">' + url + '</li><button class="read-button">Mark Read</button><button class="remove-bookmark-button">Remove Bookmarks</button></div>');
    $('.error-message').text('');
  }
}


  $('.bookmark-list').on('click', '.read-button', function(){
    $(this).parent().toggleClass('read');
  });

  $('.bookmark-list').on('click', '.remove-bookmark-button', function(){
    $(this).parent().remove();
  });

});
