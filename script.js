$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX Designer", "Mobile Developer", "Android Native Dev", "Flutter Developer", "Freelancer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Mobile Developer", "UI/UX Designer", "Android Native Dev", "Flutter Developer", "Freelancer",],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.home');
    const numStars = 100;  // Adjust the number of stars to generate

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Randomize top, left, animation duration, and delay using CSS variables
        const topPosition = Math.random();  // Random value between 0 and 1
        const leftPosition = Math.random(); // Random value between 0 and 1
        const animationDuration = Math.random() * 5;  // Random value between 0 and 5s
        const animationDelay = Math.random() * 5;     // Random value between 0 and 5s

        // Set CSS variables for each star
        star.style.setProperty('--star-top', topPosition);
        star.style.setProperty('--star-left', leftPosition);
        star.style.setProperty('--animation-duration', animationDuration);
        star.style.setProperty('--animation-delay', animationDelay);

        // Append the star to the container
        starContainer.appendChild(star);
    }
});