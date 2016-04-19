$(window).load(function() {
  $('.allButNav').fadeIn(750);
});


new WOW().init();

//Timeout
var idleTime = 0;

//Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 5) {
        window.location = "index.html";
    }
}


//Play gif
$("#bugin").delay(1000).queue(function(){$("#bugin").attr("src", "images/bugin.gif")});
$("#pattern1").delay(4000).queue(function(){$("#pattern1").attr("src", "images/testPattern.gif")});

//Fade in on page load
//$('body').css('display', 'none');
//$('body').fadeIn(750);

//Fade out on navigation
$('a').click(function() {
  var selected = $(this);
  event.preventDefault();
  if (selected.hasClass("disabled")) {
    //do something else?
  } else {
      newLocation = this.href;
      if (newLocation == "http://sixlegsfoodtruck.dev/index.html") {
        $('.navigation').fadeOut(750);
      }
      //alert(newLocation);
      $('.allButNav').fadeOut(750, newpage);
    }
});

function newpage() {
  window.location = newLocation;
}

//Map interaction
$(".marker").click(function(){
  $(".overlay").fadeIn(300);
  $(".modal").addClass("active");
});

$(".overlay, .modal").click(function(){
  $(".modal").fadeOut(300);
  $(".overlay").delay(300).fadeOut(300, function(){
    $(".modal").css("display", "block");
    $(".modal").removeClass("active");
  });
});

//locate toogle
$(".otr h4").click(function(){
  $(".otr").addClass("active");
  $(".fountain").removeClass("active");
  $("#fountain").fadeOut(300, function() {
    $("#OTR").fadeIn(300);
  });
});

$(".fountain h4").click(function(){
  $(".fountain").addClass("active");
  $(".otr").removeClass("active");
  $("#OTR").fadeOut(300, function() {
    $("#fountain").fadeIn(300);
  });
});

//Environment toggle
$('.toggleItem').click(function(){
  var selected = $(this);
  var target = $(selected).data('content');
  if (selected.hasClass('active')) {
    //do nothing
  } else {
    $(selected).addClass('active');
    $('#'+target).delay(500).fadeIn(500);
    $('.toggleItem').not(selected).each(function(){
      $(this).removeClass('active');
      var otherTarget = $(this).data('content');
      $('#'+otherTarget).fadeOut(500);
    });
  }
});
