if (typeof window !== 'undefined') {
    document.querySelector('.sticky_share_btn').addEventListener('click', function () {
        var listing = document.querySelector('.listing');
        if (listing.style.display === 'none' || listing.style.display === '') {
            fadeIn(listing, 200);
        } else {
            fadeOut(listing, 200);
        }
    });
}

function fadeIn(element, duration) {
    var opacity = 0;
    element.style.display = 'block';
    var interval = 50;
    var gap = interval / duration;

    function increaseOpacity() {
        opacity += gap;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeInterval);
        }
    }

    var fadeInterval = setInterval(increaseOpacity, interval);
}

function fadeOut(element, duration) {
    var opacity = 1;
    var interval = 50;
    var gap = interval / duration;

    function decreaseOpacity() {
        opacity -= gap;
        element.style.opacity = opacity;

        if (opacity <= 0) {
            element.style.display = 'none';
            clearInterval(fadeInterval);
        }
    }

    var fadeInterval = setInterval(decreaseOpacity, interval);
}
