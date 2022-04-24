import landingHeight from "./landingPageHeight.js";

// calling functions based on the resize

window.addEventListener('resize', () => {
    landingHeight()
})

// defining default functions

landingHeight()