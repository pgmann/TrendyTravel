function changeSlide(slideshow, backward) {
    var activeSlide = slideshow.querySelector(".active-slide") || slideshow.firstElementChild;
    if (!activeSlide) return;
    activeSlide.classList.remove("active-slide");
    var nextSlide;
    if (backward)
        nextSlide = activeSlide.previousElementSibling || slideshow.lastElementChild;
    else
        nextSlide = activeSlide.nextElementSibling || slideshow.firstElementChild;
    nextSlide.classList.add("active-slide");
}