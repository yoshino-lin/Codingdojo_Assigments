$(document).ready(function(){
    $("img").hover(function() {
        $(this).css("content","url(cat2.jpg)")
    },function() {
        $(this).css("content","url(cat1.jpg)")
    });
});
