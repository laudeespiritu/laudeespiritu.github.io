//Current slider index
var sliderIndex = 1;

//Selecting html body
const siteContent = document.querySelector('body');

function openLightBox(lightBox) {
  lightBox.style.display = 'block';            
  siteContent.style.overflow = 'hidden';
}

function closeLightBox(lightBox) {
  lightBox.style.display = 'none';
  siteContent.style.overflow = 'auto';
}

function displaySlide(index) {
  const lightBox = document.querySelector('.img-lightbox');
  openLightBox(lightBox);
  const imgSliders = document.querySelectorAll(".img__slider");
  document.querySelector('.slider__button--prev').style.display = (index == 1) ? 'none' : 'block';
  document.querySelector('.slider__button--next').style.display = (index == imgSliders.length) ? 'none' : 'block';
  imgSliders.forEach(slides => {
    slides.style.display = 'none';
  });
  imgSliders[sliderIndex-1].style.display = 'block';
}

//Close the lightbox modal if backdrop is clicked
document.querySelector(".img-lightbox").addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return
    closeLightBox(e.currentTarget);
});

//Open lightbox when image is clicked
const imgMockupList = document.querySelectorAll('.img__mockup');
imgMockupList.forEach(mockupList => mockupList.addEventListener('click', (e)=> {
    displaySlide(sliderIndex = parseInt(e.target.getAttribute('data-current-slide')));
}));

//Close lightbox
document.querySelector(".bdrop__button--close").addEventListener('click', () => {
    const lightBox = document.querySelector('.img-lightbox');
    closeLightBox(lightBox);
});

//Move to previous slide
    document.querySelector('.slider__button--prev').addEventListener('click', () => {
    displaySlide(sliderIndex-=1);
});

//Move to next slide
document.querySelector('.slider__button--next').addEventListener('click', () => {
    displaySlide(sliderIndex+=1);
});