const moveTop = document.querySelector('.move__top');
const header = document.querySelector('header');
const classShow = "show";
const classOpen = "open";

// scroll event
window.addEventListener('scroll', function() {
    // calculate height location of window when scroll
    if (this.scrollY >= 220)
        moveTop.classList.add(classShow);
    else
        moveTop.classList.remove(classShow);
})

// Open and close subnav
const navbarLinks = document.querySelectorAll('.nav__list-item-link');
for (const navbarLink of navbarLinks) {
    if (navbarLink.nextElementSibling) {

        // Click nav item
        navbarLink.addEventListener('click', function(e) {
            e.preventDefault();
            const subnav = this.nextElementSibling;
            subnav.classList.toggle(classOpen);
            subnav.classList.toggle('openMobile');

            // remove other ul has class = ".open" # this
            for (const item of navbarLinks) {
                if (item.nextElementSibling && item != this) {
                    if (item.nextElementSibling.classList.contains(classOpen)) {
                        item.nextElementSibling.classList.remove(classOpen);
                        item.nextElementSibling.classList.remove('openMobile');
                    }
                        
                }
            }

            // focus out nav item
            this.addEventListener('focusout', function() {
                subnav.classList.remove(classOpen);
            })
        })  
    }
}

const btnNavMobile = document.querySelector('.nav__mobile-btn-main');
const navMobile = document.querySelector('.nav__mobile');

btnNavMobile.addEventListener('click', function() {
    navMobile.classList.toggle('openMobile');
})

// Open and close subnav 2
const subnavLinks = document.querySelectorAll('.nav__mobile .subnav__item-link.subnav__item-link--arrow-right');
for (const subnavLink of subnavLinks) {
    if (subnavLink.nextElementSibling) {

        // Click nav item
        subnavLink.addEventListener('click', function(e) {
            e.preventDefault();
            const subnav = this.nextElementSibling;
            subnav.classList.toggle('openMobile');
        })
    }
}

