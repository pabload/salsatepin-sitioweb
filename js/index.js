const mobileOptions = document.querySelector('.mobile-options');
const hamburger = document.querySelector('#nav-icon1');
const nav = document.querySelector('.navbar-container');
const modal = document.querySelector('.modal-image');
const selectedimage = document.querySelector('.selected-image');
const form = document.querySelector('.form-container');
const gallerySectionContainer = document.querySelector('.gallery-section-container');
const galleryImageContainers = document.querySelectorAll('.gallery-image-container');
const aboutSectionContainer = document.querySelector('.about-section-container');
const aboutImageContainer = document.querySelector('.about-image-container');
const aboutInfoContainer = document.querySelector('.about-info-container');
const contactContainer = document.querySelector('.contact-section-container');
const bottle =document.querySelector('.main-section-bottle');
const splashScren = document.querySelector('.splash-screen');
window.onresize = (event) => {
    if (window.screen.width > 600) {
        mobileOptions.classList.remove('mobile-options-active');
        //hamburger.classList.toggle('open');
    }
};
window.onscroll = (event) => {
    animateAboutEntrance();
    animateGalleryEntrance();
    if (window.scrollY > 0) {
        nav.classList.add('navbar-container-scrolled');
    } else {
        nav.classList.remove('navbar-container-scrolled');
    }
};
window.onload= (event)=>{
    setTimeout(() => {
        splashScren.style.display = "none"; 
        bottle.classList.add('animate__animated' ,'animate__backInLeft');
    },1000);
}
animateGalleryEntrance = () => {
    let bounding = gallerySectionContainer.getBoundingClientRect();
    if (bounding.top <= 800) {
        galleryImageContainers.forEach((cont) => {
            cont.classList.add('animate__animated', 'animate__fadeInLeftBig');
        });
    }
}
animateAboutEntrance = () => {
    let bounding = aboutSectionContainer.getBoundingClientRect();
    if (bounding.top <= 800) {
        aboutImageContainer.classList.add('animate__animated', 'animate__fadeInLeft');
        aboutInfoContainer.classList.add('animate__animated', 'animate__fadeInRight');
    }
}
showOptions = () => {
    hamburger.classList.toggle('open');
    if (mobileOptions.classList.contains('mobile-options-active')) {
        mobileOptions.classList.remove('mobile-options-active', 'animate__animated', 'animate__fadeInDown');
    } else {
        mobileOptions.classList.add('mobile-options-active', 'animate__animated', 'animate__fadeInDown');
    }
}
closeMobileNav = () => {
    hamburger.classList.toggle('open');
    mobileOptions.classList.remove('mobile-options-active');
}
openModal = (number) => {
    let imgsrc;
    selectedimage.src = `./assets/index/image${number}-gallery.jpg`;
    modal.classList.add('modal-image-active');
}
closeModal = () => {
    modal.classList.remove('modal-image-active');
}
submitForm = () => {
    form.submit();
    form.reset();
    return false;
}