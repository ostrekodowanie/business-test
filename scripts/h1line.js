const title = document.querySelector('.s1 h1');
const form = document.querySelector('.email-input')
const defaultLineHeight = () => title.style.lineHeight = "130%";
const defaultFormMargin = () => form.style.marginTop = "3rem";
defaultLineHeight();
defaultFormMargin();

window.addEventListener('resize', () => {
    let titleWidth = title.offsetWidth;
    if(titleWidth < 317) {
        title.style.lineHeight = "150%";
        form.style.marginTop = "2rem";
    }
    else {
        defaultLineHeight();
        defaultFormMargin();
    };
});