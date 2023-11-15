let slideIndex = 0;

function changeSlide(n) {
    let slides = document.getElementsByClassName("geser");
    slideIndex += n;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }

    for (let slide of slides) {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}