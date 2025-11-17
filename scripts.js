$(document).ready(function() {
    let $toggleBtn = $(".toggle-btn");
    let $toggleBtnIcon = $(".toggle-btn i");
    let $dropDownMenu = $(".dropdown-menu");

    // Kattintásra lenyíló mobil menü
    $toggleBtn.on("click", function() {
        $dropDownMenu.toggleClass("open");
        let isOpen = $dropDownMenu.hasClass("open");
        $toggleBtnIcon.attr("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
        if (isOpen) {
            // Menü megnyitásakor zárja be az összes almenüt
            $(".dropdown-sub-menu, .dropdown-sub-sub-menu").slideUp(0);
        }
    });

    // Mobil almenü
    $(".dropdown-menu > li >a").on("click", function(e) {
        let $subMenu = $(this).siblings(".dropdown-sub-menu");
        if ($subMenu.length > 0) {
            e.preventDefault();
            $(".dropdown-sub-menu").not($subMenu).slideUp();
            $subMenu.slideToggle();
        } else {
            $(".dropdown-sub-menu, .dropdown-sub-sub-menu").slideUp(); 
        }
    });

    // Mobil al-almenü
    $(".dropdown-sub-menu > li > a").on("click", function(e) {
        let $subSubMenu = $(this).siblings(".dropdown-sub-sub-menu");
        if ($subSubMenu.length > 0) {
            e.preventDefault();
            $(".dropdown-sub-sub-menu").not($subSubMenu).slideUp();
            $subSubMenu.slideToggle();
        } else {
            $(".dropdown-sub-sub-menu").slideUp();
        }
    });

    // Kattintásra lenyíló normál almenü
    $(".main-menu > li > a").on("click", function(e) {
        //Éppen kattintott lista elem a főmenüben (azaz a 2. elem "Legnépszerűbb ízek")
        let $subMenu = $(this).siblings(".sub-menu");
        if ($subMenu.length > 0) {
            e.preventDefault();
            //Ha nem a 2. lista elemre kattintottam akkor maradjon csukva az almenü
            $(".sub-menu").not($subMenu).slideUp();
            $subMenu.slideToggle();
            $(".sub-sub-menu").slideUp(); 
        } else {
            $(".sub-menu").slideUp(); 
        }
    });

    //Kattintásra lenyíló normál al-al menü
    $(".sub-menu > li > a").on("click", function(e) {
        let $subSubMenu = $(this).siblings(".sub-sub-menu");
        if ($subSubMenu.length > 0) {
            e.preventDefault();
            $(".sub-sub-menu").not($subSubMenu).slideUp();
            $subSubMenu.slideToggle();
        } else {
            $(".sub-sub-menu").slideUp(); 
        }
    });

    // Ablak átméretezés: mobil menü bezárása desktopra váltáskor
    $(window).on("resize", function() {
        if ($(window).width() > 992) {
            $dropDownMenu.removeClass("open"); 
            $dropDownMenu.find(".dropdown-sub-menu, .dropdown-sub-sub-menu").slideUp(0);
            $toggleBtnIcon.attr("class", "fa-solid fa-bars");
        }
    });
});