// ? Logo animation stroke dash l=informations
const logo = document.querySelectorAll(".logo path");
for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
// ? First small movement animation path
const flightPath = {
    curviness: 0,
    autoRotate: false,
    values: [
        { x: 0, y: 30 },
        { x: 0, y: -20 },
        { x: 0, y: 30 },
        { x: 0, y: -20 },
        { x: 0, y: 30 },
        { x: 0, y: -20 },
        { x: 0, y: 30 },
        { x: 0, y: -20 },
        { x: 0, y: 30 },
        { x: 0, y: -20 },
        { x: 0, y: 30 },
        { x: 0, y: -20 },
        { x: 0, y: 30 },
    ]
};
// ? First small movement animation code
const tween = new TimelineLite();
tween.add(
    TweenLite.to('.arrow', 5, {
        bezier: flightPath,
        ease: Power2.ease

    })
);
// ? Scrolldown effect of arrow and it's path
const flightPath2 = {
    curviness: 1.5,
    autoRotate: false,
    values: [
        { x: 100, y: 400 },
        { x: -250, y: 800 },

    ]
};

// { x: -window.innerWidth, y: 700 },
// ? Scrolldown effect of arrow.
const tween2 = new TimelineLite();
tween2.add(
    TweenLite.to('.arrow', 30, {
        bezier: flightPath2,
        ease: Power2.ease,
        rotation: "360_ccw"
    })
);
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: '.logo',
    duration: 1000,
    triggerHook: 0,
})
    .setTween(tween2)
    // .addIndicators()
    // .setPin('.contactImg')
    .addTo(controller);

// ? LightMode Script


const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');


// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode(); s
    }
}