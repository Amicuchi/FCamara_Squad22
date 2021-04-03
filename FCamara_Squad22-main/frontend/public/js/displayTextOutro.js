const toggler = function() {
  $("#outro-text").toggleClass('hide-input', addOrRemove)
};
toggler();
 
$('#outro').on( "click", toggler );