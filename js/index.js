/****************************
    ANIMATE AOS JS 
 ****************************/
AOS.init();

/************************
        NAV
**************************/
window.addEventListener("scroll" , function(e){
    if (this.scrollY > 95) {
        this.document.querySelector("header").classList.add('navigation-header')
    } else {
        this.document.querySelector("header").classList.remove('navigation-header')
    }
})

/************************
        HumbergerMenu
************************/
document.querySelector(".humIcon")
    .addEventListener("click", function () {
        document.querySelector(".iconRight")
        .classList.toggle("active")
        document.querySelector("header")
        .classList.toggle("expand")
    })

/************************
    smooth navigation
 ************************/
$(document).ready(function () {
    $(".custom-a").on("click", function (e) {
        e.preventDefault();
        $('.humIcon').click()
        let section = $(this).attr("href")
        $('html ,body').animate({
            scrollTop: $(section).offset().top - 120
        }, 1200, "easeInOutExpo")
    })
})

const links = document.querySelectorAll('.custom-a')
for (let i = 0; i < links.length ; i++){
    links[i].addEventListener("click", function (e) {
        for (let i = 0; i < links.length; i++){
            links[i].classList.remove('current')
        }   
        this.classList.add('current')
    })
}


