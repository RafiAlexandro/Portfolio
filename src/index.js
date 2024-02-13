$(document).ready(function() {
    
    // Navbar Fixed 
    const header = $("header").offset();
    const fixedNav = header.top;
    
    $(window).scroll(function () {

        if (window.pageYOffset > fixedNav) {
            $("header").addClass("navbar-fixed");
            $("header").addClass("bg-opacity-40");
        } else {
            $("header").removeClass("navbar-fixed");
            $("header").removeClass("bg-opacity-40");
        }
    });

    const hamburger = $("#hamburger");
    const navMenu = $("#nav-menu");
    const mobile = window.matchMedia("(max-width: 1024px)");
    
    $(hamburger).click(function () {

        if (mobile.matches) {
            $(navMenu).slideToggle();
        } else {
            // Tricky
            $(window).hide("#nav-menu");
        }
    });

    $(".homepage-container-title").delay(100).animate({'opacity':'100'},8000);
    $(".homepage-container-button").delay(300).animate({'opacity':'100'},8000);
    $(".homepage-container-image").delay(50).animate({'opacity':'100'},8000);
    $(".projects-container-title").delay(100).animate({'opacity':'100'},8000);
    $(".projects-container-text").delay(300).animate({'opacity':'100'},8000);
    $(".project-tab").delay(500).animate({'opacity':'100'},8000);
    $(".about-container-title").delay(100).animate({'opacity':'100'},8000);
    $(".about-container-text").delay(300).animate({'opacity':'100'},8000);
    $(".about-profile").delay(500).animate({'opacity':'100'},8000);

    const aboutme = $(".homepage-container-title").offset();
    const fadeImageAboutMe = aboutme.top;
    
    $(window).scroll(function () {

        if (window.pageYOffset > fadeImageAboutMe) {
            $(".homepage-aboutme-image").delay(0).animate({'opacity':'100'},8000);
            $(".homepage-aboutme-logo1").delay(150).animate({'opacity':'100'},8000);
            $(".homepage-aboutme-logo2").delay(300).animate({'opacity':'100'},8000);
        }
    });

    const selectedprojects = $(".homepage-service-tab").offset();
    const fadeSelectedProjects = selectedprojects.top;
    
    $(window).scroll(function () {

        if (window.pageYOffset > fadeSelectedProjects) {
            $(".homepage-selectedprojects").delay(0).animate({'opacity':'100'},8000);
        }
    });

    const homecontactme = $("#default-tab-content").offset();
    const fadeHomeContactMe = homecontactme.top;
    
    $(window).scroll(function () {

        if (window.pageYOffset > fadeHomeContactMe) {
            $(".homepage-contact-me").delay(800).animate({'opacity':'100'},8000);
        }
    });
    
})