function changeSlide(slideshow, backward) {
    // find the active slide within the slideshow, or use the first element
    var activeSlide = slideshow.querySelector(".active-slide") || slideshow.firstElementChild;
    if (!activeSlide) return; // stop if there are no slides in the slideshow
    activeSlide.classList.remove("active-slide"); // the current slide is no longer the active one
    // determine next slide, it will be either the next sibling or the first slide if the end was reached
    var nextSlide;
    if (backward)
        nextSlide = activeSlide.previousElementSibling || slideshow.lastElementChild;
    else
        nextSlide = activeSlide.nextElementSibling || slideshow.firstElementChild;
    nextSlide.classList.add("active-slide"); // make the next slide active so it becomes visible
}