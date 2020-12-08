let headerHeight = $("nav").outerHeight();

$(".nav-link").click(function(e) {
  let linkHref = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(linkHref).offset().top - headerHeight
    },
    500
  );

  e.preventDefault();
});
// Scroll
