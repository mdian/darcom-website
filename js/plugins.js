$(function () {


    // filtering the special products shows method
    $('select.special').change(function () {
        let value = $(this).children("option:selected").val();
        $(value).siblings().removeClass('active');
        $(value).siblings(':not(.alls_sp' + value + ')').addClass("invisible");
        $(value).siblings(':not(.alls_sp' + value + ')').addClass("d-none");
        $(value).siblings(':not(.alls_sp' + value + ')').removeClass("carousel-item");
        $(value).removeClass("invisible");
        $(value).removeClass("d-none");
        $(value).addClass("carousel-item");
        $(value + ':first').addClass('active')
    })



    // filtering the more sale products method

    $('select.more_sale').change(function () {
        let value = $(this).children("option:selected").val();
        $(value).siblings().removeClass('active');
        $(value).siblings(':not(.alls' + value + ')').addClass("invisible");
        $(value).siblings(':not(.alls' + value + ')').addClass("d-none");
        $(value).siblings(':not(.alls' + value + ')').removeClass("carousel-item");
        $(value).removeClass("invisible");
        $(value).removeClass("d-none");
        $(value).addClass("carousel-item");
        $(value + ':first').addClass('active')
    })

    // filltering famous products method

    $('select.famous').change(function () {
        let value = $(this).children("option:selected").val();
        $(value).siblings().removeClass('active');
        $(value).siblings(':not(.alls_fa' + value + ')').addClass("invisible");
        $(value).siblings(':not(.alls_fa' + value + ')').addClass("d-none");
        $(value).siblings(':not(.alls_fa' + value + ')').removeClass("carousel-item");
        $(value).removeClass("invisible");
        $(value).removeClass("d-none");
        $(value).addClass("carousel-item");
        $(value + ':first').addClass('active')
    })
})