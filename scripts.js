$(document).ready(function() {
    let $toggleBtn = $(".toggle_btn");
    let $toggleBtnIcon = $(".toggle_btn i");
    let $dropDownMenu = $(".dropdown_menu");

    // Kattintásra lenyíló mobil menü
    $toggleBtn.on("click", function() {
        $dropDownMenu.toggleClass("open");
        let isOpen = $dropDownMenu.hasClass("open");

        $toggleBtnIcon.attr("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
    });


    // Kattintásra lenyíló almenü
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


    //Kattintásra lenyíló al-almenü
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
});