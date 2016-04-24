//Scroll plugin
new WOW().init();

//Timeout
var idleTime = 0;

var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

$(this).mousemove(function (e) {
    idleTime = 0;
});
$(this).keypress(function (e) {
    idleTime = 0;
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 10) {
        window.location = "index.html";
    }
}

//Active Nav links
$(function() {
     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
     //alert(pgurl);
     $(".navigation ul li a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
     })
});

//FAQ
$('.faqTitle').click(function(){
  var target =  $(this).parent()

  if (target.hasClass("active")) {
    target.removeClass("active");
      $(target).find(".answer").slideUp(500, "swing");
  } else {
    $(".question").not(target).removeClass("active");
    $(".question").not(target).find(".answer").slideUp(500, "swing");
    target.addClass("active");
    $(target).find(".answer").slideDown(500, "swing");
  }
});


//Play gif
$("#bugin").delay(1000).queue(function(){$("#bugin").attr("src", "images/bugin.gif")});
$("#faqAnimate").delay(1000).queue(function(){$("#faqAnimate").attr("src", "images/faqAnimate.gif")});
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
      //alert(newLocation);
      $('body').fadeOut(500, newpage);
    }
});

function newpage() {
  window.location = newLocation;
}

//Email input - Why am i wasting my time with this?
$('input').on('keyup', function() {
     if (this.value.length > 1) {
          $('.footer .formSubmit').fadeIn(300);
     } else {
       $('.footer .formSubmit').fadeOut(300);
     }
});
$('.footer .formSubmit').click(function(){
  alert("Thank you!");
  var formss = $('form input').val("");
  $('.footer .formSubmit').fadeOut(300);
});

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
