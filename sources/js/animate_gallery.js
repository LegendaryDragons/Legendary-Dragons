// POPUP IMAGE
const divs = document.querySelectorAll('.gallery-wrapper div');
const fullscreenView = document.querySelector('.image-view');
const cancelBtn = document.getElementById('cancel-btn');

divs.forEach(function(BG, idx){
    BG.addEventListener('click', function(){
        fullscreenView.style.display = "block";

        fullscreenView.style.background = `url(./sources/image/gallery/ff-${idx + 1}.jpg) center/cover no-repeat`;
    })
})
cancelBtn.addEventListener('click', function(){
    fullscreenView.style.display = "none";
})

//Animation Gallery
gsap.fromTo("header", {y:-50, opacity: 0},{y:0, opacity:1, ease:"power2.out", duration:2.5})
gsap.fromTo(".title_gallery", {x:-200, opacity: 0},{x:0, opacity:1, ease:"power2.out", duration:3})
gsap.fromTo(".month_gallery", {x:-1000, opacity: 0},{x:0, opacity:1, ease:"power2.out", duration:3.5})
gsap.fromTo(".gallery_box", {x:500, opacity:0}, {x:0, opacity:1, ease:"power3.out", duration:5})