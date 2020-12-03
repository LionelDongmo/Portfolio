jQuery(document).ready(function($) {
    //logo
    var $logo = $('#logo');
    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
    $('.menu .tabs a').click(function() {
        $logo.fadeIn('slow');

        var $href = $(this).attr('href');
        var $id = $href.slice(1);
        $('.menu .tabs a').removeClass('active');
        $(this).addClass('active');

        var $section = $('.contenu.visible');
        var $idsection = $('#' + $id);
        if ($idsection.hasClass('visible') != true) {
            $section.slideUp('slow', function() {
                $idsection.slideDown('slow');
                $section.removeClass('visible');
                $idsection.addClass('visible');
            });
        }
    });
    $('.tab-profile').click(function() {
        $logo.fadeOut('slow');
    })
    $('li.pulse-button').click(function() {
        var $socit = $('.socialicons-items');
        var $socic = $('ul.socialicons li');
        $socit.animate({ right: '35px', opacity: 1 }, function() {
            $socic.animate({ width: '30px', height: '30px' })
        });
        $socit.delay(10000).animate({ right: '-75px', opacity: 0 }, function() {
            $socic.animate({ width: '10px', height: '10px' })
        });
    });

    $('#icon-parametre').click(function() {
        $('.btn-style').toggle('slow');
    });

    $('#color-rouge').click(function() {
        $(".main-wrapper-resume").attr("id", "rouge");
    });

    $('#color-bleu').click(function() {
        $(".main-wrapper-resume").attr("id", "bleu");
    });

    $('#color-orange').click(function() {
        $(".main-wrapper-resume").attr("id", "orange");
    });

    $('#color-vert').click(function() {
        $(".main-wrapper-resume").attr("id", "vert");
    });

    $('#color-violet').click(function() {
        $(".main-wrapper-resume").attr("id", "violet");
    });

    var $catsfilter = $('.cats-filter');
    $catsfilter.find('a').click(function() {

        var currentOption = $(this).attr('data-filter');
        $catsfilter.find('a').removeClass('current');
        $(this).addClass('current');
        $('.all li').hide();
        $('.all li' + currentOption + '').toggle('slow');
    });

    $('#portfolio-list').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('#portfolio-list-video').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });

});