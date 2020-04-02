/* Mobile Navigtion */

$(document).ready(function() {
  $("#mobile-nav-label").click(function() {
    $(".nav-list").slideDown("slow");
    $(".nav-list").css({
      height: "100vh",
      overflow: "hidden",
      transition: "1s ease",
      opacity: "1"
    });
    $(".nav-list").toggleClass("show");
    $(".fdin").css({ display: "none" });
    if ($(".nav-list").hasClass("show")) {
      $("#mobile-nav-label").html("Close");
      $(".nav-top").css({
        "background-color": "black",
        color: "white",
        transition: "1s ease"
      });
      $("#logo-img").attr("src", "images/mehri-logo-white.png");
    } else {
      $("#mobile-contact-info").css({ display: "none" });
      $("#mobile-nav-label").html("Menu");
      $(".nav-top").css({
        "background-color": "white",
        color: "black",
        transition: "1s ease"
      });
      $("#logo-img").attr("src", "images/mehri-logo-black.png");
      $(".nav-list").css({
        color: "black",
        height: "0",
        overflow: "hidden",
        transition: "1s ease"
      });
      $(".fdin").fadeIn(2000);
    }
  });

  $(".contact").click(function() {
    $("#mobile-contact-info").slideToggle();
  });
});
