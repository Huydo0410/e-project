$(function () {
    $(".mta-act").click(function () {
        $('.mta-act').removeClass('mta-active');
        $(this).addClass('mta-active');
    });
    $(".mscap-add").click(function () {
        if ($(".m-add-sp").hasClass("m-portlet-hide")) {
            $(".m-add-sp").removeClass("m-portlet-hide").addClass("m-portlet-show");
            $(".m-grid__item-opa").css("opacity", "0.3")
        }
    });
    $(".ion-ios-close").click(function () {
        if ($(".m-add-sp").hasClass("m-portlet-show")) {
            $(".m-add-sp").removeClass("m-portlet-show").addClass("m-portlet-hide");
            $(".m-grid__item-opa").css("opacity", "1")
        }

    });
    $("#btn-2").click(function () {
        var num_pro = parseInt($('#unit-product').val());
        num_pro_next = num_pro + 1;
        $('#unit-product').val(num_pro_next);
        return false;

    })
    $("#btn-1").click(function(){
        var num_pro = parseInt($('#unit-product').val());
        if(num_pro<=0){
            alert("không thành công");
           return false;
        }
        num_pro_pre =  num_pro-1;
        $('#unit-product').val(num_pro_pre);


    });

    // alert swal
    $(".tpi-update").click(function(){
        swal("Cập nhật thành công!!!")
    });
})