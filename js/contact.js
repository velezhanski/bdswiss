// Check for valid phone syntax
function validatephone(phone) {
  var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  return re.test(phone);
}

function closeForm() {
  document.contactform.name.value = '';
  document.contactform.phone.value = '';
  document.contactform.password.value = '';

  $('.phone').removeClass('typing');
  $('.name').removeClass('typing');
  $('.password').removeClass('typing');

  $('.cd-popup').removeClass('is-visible');
  $('.notification').addClass('is-visible');
  $('#notification-text').html("Thanks for submitting the form!");
}

$(document).ready(function($) {

  /* ------------------------- */
  /* Contact Form Interactions */
  /* ------------------------- */
  $('#contact').on('click', function(event) {
    event.preventDefault();

    $('#contactblurb').html('Questions, suggestions, and general comments are all welcome!');
    $('.contact').addClass('is-visible');

    if ($('#name').val().length != 0) {
      $('.name').addClass('typing');
    }
    if ($('#phone').val().length != 0) {
      $('.phone').addClass('typing');
    }
    if ($('#password').val().length != 0) {
      $('.password').addClass('typing');
    }
  });

  //close popup when clicking x or off popup
  $('.cd-popup').on('click', function(event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });

  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == '27') {
      $('.cd-popup').removeClass('is-visible');
    }
  });

  /* ------------------- */
  /* Contact Form Labels */
  /* ------------------- */
  $('#name').keyup(function() {
    $('.name').addClass('typing');
    if ($(this).val().length == 0) {
      $('.name').removeClass('typing');
    }
  });
  $('#phone').keyup(function() {
    $('.phone').addClass('typing');
    if ($(this).val().length == 0) {
      $('.phone').removeClass('typing');
    }
  });
  $('#password').keyup(function() {
    $('.password').addClass('typing');
    if ($(this).val().length == 0) {
      $('.password').removeClass('typing');
    }
  });

  /* ----------------- */
  /* Handle submission */
  /* ----------------- */
});