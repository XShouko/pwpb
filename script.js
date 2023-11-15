const productContainers = [...document.querySelectorAll('.product-container')];
const productContainers1 = [...document.querySelectorAll('.product-container1')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];
let slideIndex = 0;

function changeSlide(n) {
    let slides = document.getElementsByClassName("slide");
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

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; // Menggunakan scrollLeft untuk scroll ke kiri
    })
});

productContainers1.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn1[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
  })

  preBtn1[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth; // Menggunakan scrollLeft untuk scroll ke kiri
  })
});
