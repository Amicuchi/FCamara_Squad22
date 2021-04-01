$('#confirmPassword').on('keyup', function () {
  if ($('#confirmPassword').val().length > 0) {
    if ($('#password').val() == $('#confirmPassword').val()) {
      $('#message').html('As senhas batem').css('color', 'green');
    } else 
      $('#message').html('As senhas não batem').css('color', 'red');
    } else 
      $('#message').html('');
  }
);