
$(function () {


    $('.main_visual .main_visual_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,

    })


    $("#bgndVideo").YTPlayer({
        videoURL: 'https://youtu.be/iJF8UOBEbnQ',
        containment: '.main_video',
        showControls: false,
        playOnlyIfVisible: true,


    });


    let sw = true;

    $('.main_video .switch').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        }
        else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    });

    $('.main_grid .main_content_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_grid .arrows .prev').on('click', function () {
        $('.main_content_slide').slick('slickPrev')
    });
    $('.main_grid .arrows .next').on('click', function () {
        $('.main_content_slide').slick('slickNext')
    });

})