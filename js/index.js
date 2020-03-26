// main header
window.onscroll = function () {
    navbarScroll()
};

function navbarScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").className = "fixed navbar";
    } else {
        document.getElementById("nav").className = "navbar";
    }

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('mobileMenu').className = "fixed mobile";
    } else {
        document.getElementById('mobileMenu').className = "mobile"
    }
};


// open menu
function openMenu() {
    document.getElementById('sidebarMenu').style.transform = "translateX(0%)";
}

// close menu
function closeMenu() {
    document.getElementById('sidebarMenu').style.transform = "translateX(-100%)";
}

// Add active class to the current button (highlight it)
var header = document.getElementById("nav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// slick hero section
$(function() {
    $('.hero-content').slick({
        autoplay: true,
        arrows: false,
        speed: 1500,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        dots: true
    });
})

// parallax effect
$(function() {
    $('.hero-content').parallax({imageSrc: 'assets/1.jpg'});
})