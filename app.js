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
    TweenLite.to('.arrow', 10, {
        bezier: flightPath,
        ease: Power2.ease

    })
);