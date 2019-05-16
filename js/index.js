// by http://www.arlinadzgn.com
$(window).scroll(function() {
  $("#chslidingbox").css($(this).scrollTop() > 400 ? {
    right: "0px"
  } : {
    right: "-360px"
  })
}), $(document).ready(function() {
  var i = $("#chslidingbox"),
    s = $("#chslidingbox-close"),
    o = $("#chslidingbox-minimize"),
    l = $("#chslidingbox-maximize");
  l.hide(), s.click(function() {
    i.css({
      right: "-350px"
    }), i.fadeOut("slow")
  }), o.click(function() {
    i.toggleClass("hide"), $(this).hide(), l.show()
  }), l.click(function() {
    i.toggleClass("hide"), $(this).hide(), o.show()
  })
});