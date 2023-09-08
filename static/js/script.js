(function (a) {
    a(function () {
        var b = a(".start-style");
        a(window).scroll(function () {
            var c = a(window).scrollTop();
            if (c >= 10) { b.removeClass("start-style").addClass("scroll-on") }
            else { b.removeClass("scroll-on").addClass("start-style") }
        })
    });
    a(document).ready(function () { a("body.hero-anime").removeClass("hero-anime") });
    a("body").on("mouseenter mouseleave", ".nav-item",
        function (c) {
            if (a(window).width() > 750) {
                var b = a(c.target).closest(".nav-item"); b.addClass("show");
                setTimeout(function () { b[b.is(":hover") ? "addClass" : "removeClass"]("show") }, 1)
            }
        });
})(jQuery);


