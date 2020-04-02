/* Smooth Transition Effect */

$(document).ready(function() {
  function Transit($param, redirectURL) {
    redirectTime = "900";
    $param.click(function() {
      $(".projects-list").animate(
        {
          marginLeft: "-100%",
          marginTop: "-40%"
        },
        1000
      );
      $(".body-wrap").fadeOut(1100);
      setTimeout("location.href ='" + redirectURL + "';", redirectTime);
    });
  }

  if ($(".projects-list").length) {
    Transit($("#client-project-img"), "client-project");
    Transit($("#news-api-img"), "news-api");
    Transit($("#portfolio-img"), "portfolio");
    Transit($("#back-end-img"), "back-end");
    Transit($("#passion-works-img"), "passion-works");
  }

  if ($(".about-project").length) {
    $(".about-project").css({
      "margin-left": "0",
      transition: "1s ease-in-out"
    });
    $("h1").fadeIn(2000);
    $("#project").fadeIn(2400);
    $("h2").fadeIn(2000);
    $("h3").fadeIn(2600);

    $("#project-image").animate(
      {
        height: "100%",
        width: "100%",
        marginRight: "0",
        marginLeft: "0"
      },
      2000
    );
  }

  if ($(".project-details").length) {
    $(".project-details").fadeIn(2000);
    $("footer").fadeIn(2100);
  }
});
