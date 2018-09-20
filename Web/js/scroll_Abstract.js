$(function () {
    var scrollBtn = $('#scroll_down');
    scrollBtn.click(function () {
        var i = $(scrollBtn).index(this);
        var p = $("#upper-Abstract").eq(i).offset().top;
        $('body,html').animate({
            scrollTop: p
        }, 'slow');
        return false;
    });
});