var imgArr = [
    {   
    filename: 'img/1.jpg',
    photographer: 'Anon',
    caption: 'Busy street in the morning'
    },
    {
    filename: 'img/2.jpg',
    photographer: 'Anon',
    caption: 'Old style DJ'
    },
    {
    filename: 'img/3.jpg',
    photographer: 'Anon',
    caption: 'Shadow boots'
    },
    {
    filename: 'img/4.jpg',
    photographer: 'Anon',
    caption: 'Fireworks in the crowd'
    },
    {
    filename: 'img/5.jpg',
    photographer: 'Anon',
    caption: 'Silent judgement'
    },
    {
    filename: 'img/6.jpg',
    photographer: 'Anon',
    caption: 'Tanlines and trampolines'
    },
    {
    filename: 'img/7.jpg',
    photographer: 'Anon',
    caption: 'White flower in bloom'
    },
    {
    filename: 'img/8.jpg',
    photographer: 'Anon',
    caption: 'Alone in the Artic'
    }
    
];


$(function () {
    addPictures(imgArr);
    openOverlay();
});

function addPictures(arr) {
    for (let i=0; i<arr.length; i++) {
        $('.gallery').append(
            `<div class="imgCard">
                <img src=${arr[i].filename} alt='${arr[i].caption}' class="imgItem">
            </div>`);
    }
}

function openOverlay() {
    $('.imgItem').click(function() {
        var imgHref = $(this).attr('src');
        var imgCaption = $(this).attr('alt');
        if ($('.overlay').length>0) {
            $('.overlayImg').attr('src', imgHref);
            $('.overlayCard p').html(imgCaption);
            $('.overlay').slideDown('fast');
        } else {
            let overlay = 
            `<div class='overlay'>
                <span class='closeBtn'>&times;</span>
                <div class='overlayCard'>
                    <img class='overlayImg' src='${imgHref}'/>
                    <p class='overlayCaption'>${imgCaption}</p>
                </div>
            </div>`
            $('.container').append(overlay);
        }
        $('.closeBtn').click(()=> {
            $('.overlay').slideUp('fast');
        });
        $('.overlay').click(()=> {
            $('.overlay').slideUp('fast');
        });
    })
}
