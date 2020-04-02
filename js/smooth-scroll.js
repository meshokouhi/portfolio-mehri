/* Smooth Scroll Effect */

$(document).ready(function() {
  $("#triangle").on("click", function() {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  var smoothScrollBottom = () => {
    bottom = $(document).height() - $(window).height();
    $("html,body").animate({ scrollTop: bottom }, 500);
  };

  $("#contact-me").on("click", smoothScrollBottom);
});
