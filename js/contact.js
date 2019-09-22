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
  $('#contactform').submit(function() {
    var name = $('#name').val();
    var phone = $('#phone').val();
    var password = $('#password').val();
    var human = $('#human:checked').val();

    if (human) {
      if (validatephone(phone)) {
        if (name) {
          if (password) {

// Handle submitting data somewhere
// For a tutorial on submitting the form to a Google Spreadsheet, see:
// https://notnaturaltutorials.wordpress.com/2016/03/20/submit-form-to-spreadsheet/

            closeForm();

          } else {
            $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
            $('.notification').addClass('is-visible');
          }
        } else {
          $('#notification-text').html('<strong>Please provide a name.</strong>');
          $('.notification').addClass('is-visible');
        }
      } else {
        $('#notification-text').html('<strong>Please use a valid phone number.</strong>');
        $('.notification').addClass('is-visible');
      }
    } else {
      $('#notification-text').html('<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>');
      $('.notification').addClass('is-visible');
    }

    return false;
  });
});