const productContainers = [...document.querySelectorAll('.product-container')];
const productContainers1 = [...document.querySelectorAll('.product-container1')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
const nxtBtn1 = [...document.querySelectorAll('.nxt-btn1')];
const preBtn1 = [...document.querySelectorAll('.pre-btn1')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; // Menggeser ke kanan dengan menambahkan lebar container
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; // Menggeser ke kiri dengan mengurangkan lebar container
    })
});

productContainers1.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn1[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth; // Menggeser ke kanan dengan menambahkan lebar container
    })

    preBtn1[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth; // Menggeser ke kiri dengan mengurangkan lebar container
    })
});
