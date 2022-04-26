export function animations() {
    gsap.from('.problem-div', {
        scrollTrigger: {
            trigger: '.problem-div',
            start: 'top 80%'
        },
        duration: 0.5,
        stagger: 0.1,
        y: 80,
        opacity: 0,
        ease: Power1.easeInOut
    })
}

export function mobileAnimations() {
    
}