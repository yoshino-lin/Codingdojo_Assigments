$(document).ready(function(){
    $("img").click(function() {
        var src_cat = $(this).attr("src1");
        var src_ninja = $(this).attr("src2");
        var alt_cat = $(this).attr("alt1");
        var alt_ninja = $(this).attr("alt2");

        if($(this).attr("src") == src_cat){
            $(this).attr("src",src_ninja);
            $(this).attr("alt",alt_ninja);
        }else{
            $(this).attr("src",src_cat);
            $(this).attr("alt",alt_cat);
        }
    });
 });
