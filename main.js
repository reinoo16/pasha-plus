import './style.css'

window.addEventListener('scroll', function () {
    var navbar = document.querySelector(".navbar")
    if (this.window.scrollY > 100) {
        navbar.classList.add('active-navbar');
    } else {
        navbar.classList.remove('active-navbar');
    }
})

const navbarItems = document.querySelector(".navbar-items");
document.querySelector(".navbar-toggle").addEventListener('click', function () {
    navbarItems.classList.add('w-full');
    navbarItems.style.padding = '30px 30px';
});

document.querySelector(".nav-close").addEventListener('click', function () {
    navbarItems.classList.remove('w-full');
    navbarItems.style.padding = '30px 0px';
});


function checkScreenWidth() {
    if (window.innerWidth >= 640) {
        // Ekran genişliği 640px'in üstündeyse 'absolute' sınıfını sil
        document.querySelector('.navbar-items').classList.remove('absolute');
    } else {
        // Ekran genişliği 640px'in altındaysa 'absolute' sınıfını ekle
        document.querySelector('.navbar-items').classList.add('absolute');
    }
}

// Sayfa yüklendiğinde ve yeniden boyutlandırıldığında kontrol fonksiyonunu çağır
window.onload = checkScreenWidth;
window.onresize = checkScreenWidth;

const filterButtons = document.querySelectorAll(".filter_buttons button");
const menuCards = document.querySelectorAll(".menu_cards .menu-card");

const filterCards = e => {
    document.querySelector(".button-50__active").classList.remove("button-50__active")
    e.target.classList.add("button-50__active");

    menuCards.forEach(card => {
        card.classList.add("hide")

        if (card.dataset.name === e.target.dataset.name) {
            card.classList.remove("hide");
        }
    })
}

filterButtons.forEach(button => button.addEventListener('click', filterCards))

// animations

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animate-section").forEach(section => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                section.style.opacity = "1";
            }
        }
    });
})

if (document.querySelector(".about-section")) {
    gsap.utils.toArray(".about-section").forEach(aboutSec => {
        gsap.to(aboutSec, {
            scrollTrigger: {
                trigger: aboutSec,
                start: "-200 center",
                scrub: true,
                onToggle: self => {
                    document.querySelector(".about-left").classList.add("animate__slideInLeft");
                    document.querySelector(".about-right").classList.add("animate__slideInRight");
                }
            }
        })
    })
}

if (document.querySelector(".menu-section")) {
    gsap.utils.toArray(".menu-section").forEach(menuSec => {
        gsap.to(menuSec, {
            scrollTrigger: {
                trigger: menuSec,
                start: "-200 center",
                scrub: true,
                onToggle: self => {
                    document.querySelector(".menu-title").classList.add("animate__slideInDown");
                    document.querySelector(".filter_buttons").classList.add("animate__slideInLeft");
                    document.querySelector(".menu_cards").classList.add("animate__slideInUp");
                    if (document.querySelector(".menu-see")) {
                        document.querySelector(".menu-see").classList.add("animate__slideInUp");
                    }
                }
            }
        })
    })

}

if (document.querySelector(".gallery-section")) {
    gsap.utils.toArray(".gallery-section").forEach(gallerySec => {
        gsap.to(gallerySec, {
            scrollTrigger: {
                trigger: gallerySec,
                start: "-200 center",
                scrub: true,
                onToggle: self => {
                    document.querySelector(".gallery-title").classList.add("animate__slideInDown");
                    document.querySelector(".gallery-cards").classList.add("animate__slideInUp");
                    if (document.querySelector(".gallery-see")) {
                        document.querySelector(".gallery-see").classList.add("animate__slideInUp");
                    }
                }
            }
        })
    })
}

if (document.querySelector(".get-in-touch")) {
    gsap.to(".get-in-touch", {
        scrollTrigger: {
            trigger: ".get-in-touch",
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                document.querySelector(".get-in-touch").classList.add("animate__fadeIn");
                document.querySelector(".touch-title").classList.add("animate__slideInDown");
                document.querySelector(".touch-description").classList.add("animate__slideInDown");
                document.querySelector(".touch-button").classList.add("animate__slideInUp");
            }
        }
    })
}

if (document.querySelector(".footer")) {
    gsap.to(".footer", {
        scrollTrigger: {
            trigger: ".footer",
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                document.querySelector(".footer").classList.add("animate__slideInLeft");
            }
        }
    })
}

if (document.querySelector(".copyright")) {
    gsap.to(".copyright", {
        scrollTrigger: {
            trigger: ".copyright",
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                document.querySelector(".copyright").classList.add("animate__slideInRight");
            }
        }
    })
}

if (document.querySelector(".full-container")) {
    gsap.utils.toArray(".full-container").forEach(fullContainer => {
        let counterStarted = false;
        gsap.to(fullContainer, {
            scrollTrigger: {
                trigger: fullContainer,
                start: "-200 center",
                scrub: true,
                onToggle: self => {
                    document.querySelector(".container-icons").classList.add("animate__slideInUp");
                    if (!counterStarted && document.querySelector(".experience-items")) {
                        counterStarted = true;
                        let valueDisplays = document.querySelectorAll(".experience-num");

                        let interval = 1000;

                        valueDisplays.forEach(valueDisplay => {
                            let startValue = 0;
                            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                            let duration = Math.floor(interval / endValue);
                            let counter = setInterval(function () {
                                startValue += 1;
                                valueDisplay.textContent = startValue + '+';
                                if (startValue === endValue) {
                                    clearInterval(counter);
                                }
                            }, duration)
                        })
                    }
                }
            }
        })
    })

}

if (document.querySelector(".team")) {
    gsap.to(".team", {
        scrollTrigger: {
            trigger: ".team",
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                document.querySelector(".team-title").classList.add("animate__slideInDown");
                document.querySelector(".team-cards").classList.add("animate__slideInUp");
            }
        }
    })
}

if (document.querySelector(".contact-title")) {
    gsap.to(".contact-title", {
        scrollTrigger: {
            trigger: ".contact-title",
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                document.querySelector(".contact-title__up").classList.add("animate__slideInDown");
                document.querySelector(".contact-title__description").classList.add("animate__slideInUp");
            }
        }
    })
}

if (document.querySelector(".contact-form")) {
    gsap.to(".contact-form", {
        scrollTrigger: {
            trigger: ".contact-form",
            start: "-200 center",
            scrub: true,
            onToggle: self => {
                document.querySelector(".form-left").classList.add("animate__slideInLeft");
                document.querySelector(".form-right").classList.add("animate__slideInRight");
            }
        }
    })
}