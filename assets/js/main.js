$(document).ready(function() {

    // Scroll Down
    $('.scroll-down').click(function() {

        $('html, body').animate({
            scrollTop: $(".home").offset().top
        }, 2000);

    });

    // ChatBox
    var $chatbox = $('.chatbox'),
        $chatboxTitle = $('.chatbox__title'),
        $chatboxTitleClose = $('.chatbox__title__close'),
        $chatboxCredentials = $('.chatbox__credentials');
    $chatboxTitle.on('click', function() {
        $chatbox.toggleClass('chatbox--tray');
    });
    $chatboxTitleClose.on('click', function(e) {
        e.stopPropagation();
        $chatbox.addClass('chatbox--closed');
    });
    $chatbox.on('transitionend', function() {
        if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
    });
    $chatboxCredentials.on('submit', function(e) {
        e.preventDefault();
        $chatbox.removeClass('chatbox--empty');
    });

});

function marquee(a, b) {
    var width = b.width();
    var start_pos = a.width();
    var end_pos = -width;

    function scroll() {
        if (b.position().left <= -width) {
            b.css('left', start_pos);
            scroll();
        } else {
            time = (parseInt(b.position().left, 10) - end_pos) *
                (10000 / (start_pos - end_pos)); // Increase or decrease speed by changing value 10000
            b.animate({
                'left': -width
            }, time, 'linear', function() {
                scroll();
            });
        }
    }

    b.css({
        'width': width,
        'left': start_pos
    });
    scroll(a, b);

    b.mouseenter(function() { // Remove these lines
        b.stop(); //
        b.clearQueue(); // if you don't want
    }); //
    b.mouseleave(function() { // marquee to pause
        scroll(a, b); //
    }); // on mouse over

}

$(document).ready(function() {
    // Running Text
    marquee($('#display'), $('#text')); //Enter name of container element & marquee element
});

if (window.location.pathname == "/bp2gaki/profile.html") {
    $(".section-a").backstretch([
        "https://image.ibb.co/kinpK5/bg_profile_1.png", "https://image.ibb.co/nczfRk/bg_profile_2.png"
    ], { duration: 5000, fade: 750 });
} else if (window.location.pathname == "/bp2gaki/visi-misi.html") {
    $(".section-a").backstretch([
        "https://image.ibb.co/d5N9mk/bg_visi_misi_1.png", "https://image.ibb.co/b50vRk/bg_visi_misi_2.png"
    ], { duration: 5000, fade: 750 });
} else if (window.location.pathname == "/bp2gaki/struktur-organisasi.html") {
    $(".section-a").backstretch([
        "https://image.ibb.co/d0EkSQ/so_1.png", "https://image.ibb.co/jxUwZ5/so_2.png", "https://image.ibb.co/nKxuMk/so_3.png"
    ], { duration: 5000, fade: 750 });
} else if (window.location.pathname == "/bp2gaki/tata-kerja.html") {
    $(".section-a").backstretch([
        "https://image.ibb.co/mC5vu5/bg_tata_kerja_01.png", "https://image.ibb.co/fKSVSQ/bg_tata_kerja_02.png", "https://image.ibb.co/cesrZ5/bg_tata_kerja_03.png"
    ], { duration: 5000, fade: 750 });
} else if (window.location.pathname == "/bp2gaki/berita.html") {
    $(".section-a").backstretch([
        "https://image.ibb.co/d0EkSQ/so_1.png", "https://image.ibb.co/jxUwZ5/so_2.png", "https://image.ibb.co/nKxuMk/so_3.png"
    ], { duration: 5000, fade: 750 });
} else if (window.location.pathname == "/bp2gaki/kontak-kami.html") {
    $(".section-a").backstretch([
        "https://image.ibb.co/d5N9mk/bg_visi_misi_1.png", "https://image.ibb.co/b50vRk/bg_visi_misi_2.png"
    ], { duration: 5000, fade: 750 });
} else {
    $(".section-a").backstretch([
        "https://image.ibb.co/k2jk95/bg_hero.png", "https://image.ibb.co/nc8j2Q/bg_hero_1.png", "https://image.ibb.co/i8rF95/bg_hero_2.png", "https://image.ibb.co/jFcoU5/bg_hero_3.png"
    ], { duration: 3000, fade: 750 });
}