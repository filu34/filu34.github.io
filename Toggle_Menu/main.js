let toggleNavStatus = false;
let getSidebar = document.querySelector(".nav-sidebar");
let getSidebarUl = document.querySelector(".nav-sidebar ul");
let getSidebarTitle = document.querySelector(".nav-sidebar span");
let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");
let getBtnMenu = document.querySelector(".btn-toggle-nav");

let toggleNav = function() {

    if(!toggleNavStatus) {

        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        for(let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "1";
        };

        toggleNavStatus = !toggleNavStatus;
    }

    else if(toggleNavStatus) {

        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        for(let i = 0; i < getSidebarLinks.length; i++) {
            getSidebarLinks[i].style.opacity = "0";
        };

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = !toggleNavStatus;
    }
}

getBtnMenu.addEventListener("click", toggleNav);