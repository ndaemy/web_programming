var idx = 1;

$(function() {
  $(".indicator > ul > li").click(function(e) {
    var $item = $(e.currentTarget);
    idx = $item.index() + 1;
    $(".indicator > ul > li").removeClass('active');
    $(".slideshow > img").removeClass('active');
    $item.addClass('active');
    $(".slideshow > img:nth-child(" + idx + ")").addClass('active');
  });
  setInterval("autoIncrease()", 3000);
});

function autoIncrease() {
  idx++;
  if (idx > 5)
    idx -= 5;
  $(".indicator > ul > li").removeClass('active');
  $(".slideshow > img").removeClass('active');
  $(".indicator > ul > li:nth-child(" + idx + ")").addClass('active');
  $(".slideshow > img:nth-child(" + idx + ")").addClass('active');
}
