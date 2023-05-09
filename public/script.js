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

    // Modals_1

    const modal_1 = $("#modals-1");

    $(modal_1).click(function () { 
        
        $("nav").removeClass("bg-background");

    });

    // Modals_2

    const modal_2 = $("#modals-2");

    $(modal_2).click(function () { 
        
        $("nav").removeClass("bg-background");

    });

    // Modals Close_1

    const close_1 = $("#close-1");

    $(close_1).click(function () { 
        
        $("nav").addClass("bg-background");

    });

    // Modals Close_1

    const close_2 = $("#close-2");

    $(close_2).click(function () { 
        
        $("nav").addClass("bg-background");

    });

});