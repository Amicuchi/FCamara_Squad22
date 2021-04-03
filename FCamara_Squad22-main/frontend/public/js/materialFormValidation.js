$(document).ready(function () {
    $('#enviar').click(function() {
      checked = $("input[type=checkbox]:checked").length;
  
      if(!checked) {
        alert("Você tem que marcar pelo menos uma");
        return false;
      } else if (checked > 3){
        alert("Você marcou mais do que 3")
        return false
      }
  
    });
  });