$(".box-container .btn").click(function () {                         
    let filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".box-container.box").show(400);
    } else {
      $(".box-container .box")
        .not("." + filter)
        .hide(200);
      $(".box-container .box")
        .filter("." + filter)
        .show(400);
    }

    $(this).addClass("button-active").siblings().removeClass("button-active");
});   

