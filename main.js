let overlay = document.querySelector(".overlay");
let cursor = document.querySelector(".pointer"); // fixed typo
let main = document.querySelector("section");

let textBox = document.querySelector(".services-text")

// =========================
// Cursor Follower
// =========================
window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "back.out"
    });
});

// =========================
// Page 1 Animation (on load)
// =========================
function page1Animation() {
    let tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.2
    });
    tl.to("nav h1 i", {
        rotate: 45
    }, "-=1")

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.5,
    });

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    });

    tl.from(".center-part1 button", {
        opacity: 0,
        y: -10,
        duration: 0.5,
    });

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.5,
    }, "-=1");

    tl.from(".section1-bottom img", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.3
    }, "-=1");
}

// =========================
// Page 2 Animation (on scroll)
// =========================
function page2Animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec-2",
            scroller: "body",
            start: "top 70%",   // start earlier
            end: "top 20%",     // give room for scrub
            scrub: 2            // smooth scroll animation
        }
    });

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 0.5,
    });

    // box-container 1 (left + right with stagger)
    tl2.from(
        [".service-box.box1.left", ".service-box.box2.right"],
        {
            x: (i) => (i === 0 ? -300 : 300),
            opacity: 0,
            duration: 0.5,
            stagger: 0.2
        }
    );

    // box-container 2 (left + right with stagger)
    tl2.from(
        [".service-box.box3.left", ".service-box.box4.right"],
        {
            x: (i) => (i === 0 ? -300 : 300),
            opacity: 0,
            duration: 0.5,
            stagger: 0.2
        }
    );

    tl2.from(".sec2-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.5
    });

    tl2.from(".sec2-bottom-text h3", {
        x: -100,
        opacity: 0,
        duration: 0.5
    }, "-=0.3");

    tl2.from(".sec2-bottom-text p", {
        x: -100,
        opacity: 0,
        duration: 0.5
    });
}

textBox.addEventListener("mouseenter", function () {
    console.log("hellow");

    gsap.to(".services-text h4 i", {
        rotate: 45,
        color: "red"
    })
})


// =========================
// Init animations on load
// =========================
window.addEventListener("load", () => {
    page1Animation();
    page2Animation();
});
