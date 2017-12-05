$('div').on('click', function() {
      $(this).toggleClass('show-description');
  });

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$('.ab').click(function() {
  $('.lesbian').show();
  $('.gay').show();
  $('.transgender').show();
});

$('.lb').click(function() {
  $('.lesbian').show();
  $('.gay').hide();
  $('.transgender').hide();
});

$('.gb').click(function() {
  $('.lesbian').hide();
  $('.gay').show();
  $('.transgender').hide();
});

$('.tb').click(function() {
  $('.lesbian').hide();
  $('.gay').hide();
  $('.transgender').show();
});

$('.ab1').click(function() {
  $('.english').show();
  $('.foreign').show();
});

$('.engb').click(function() {
  $('.english').show();
  $('.foreign').hide();
});

$('.forb').click(function() {
  $('.english').hide();
  $('.foreign').show();
});

$('.ab2').click(function() {
  $('.drama').show();
  $('.comedy').show();
  $('.scifi').show();
  $('.documentary').show();
});

$('.drab').click(function() {
  $('.drama').show();
  $('.comedy').hide();
  $('.scifi').hide();
  $('.documentary').hide();
});

$('.comb').click(function() {
  $('.drama').hide();
  $('.comedy').show();
  $('.scifi').hide();
  $('.documentary').hide();
});

$('.scib').click(function() {
  $('.drama').hide();
  $('.comedy').hide();
  $('.scifi').show();
  $('.documentary').hide();
});

$('.docb').click(function() {
  $('.drama').hide();
  $('.comedy').hide();
  $('.scifi').hide();
  $('.documentary').show();
});
