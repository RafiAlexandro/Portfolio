$(document).ready(function () {
    
    // Navbar Fixed 
    const header = $("header").offset();
    const fixedNav = header.top;
    
    $(window).scroll(function () {


        if (window.pageYOffset > fixedNav) {
            $("header").addClass("navbar-fixed");
            $("nav").addClass("bg-opacity-70");
        } else {
            $("header").removeClass("navbar-fixed");
            $("nav").removeClass("bg-opacity-70");
        }
    });

    // Hamburger
    
    const hamburger = $("#hamburger");
    const navMenu = $("#nav-menu");
    const mobile = window.matchMedia("(max-width: 640px)");
    
    $(hamburger).click(function () {

        if (mobile.matches) {
            $(navMenu).slideToggle();
        } else {
            // Tricky
            $(window).hide("#nav-menu");
        }
    });

});