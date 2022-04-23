const title = document.querySelector('.s1 h1');
const form = document.querySelector('.email-input');
const defaultFormMargin = () => form.style.marginTop = "3rem";
defaultFormMargin();

window.addEventListener('resize', () => {
    let titleWidth = title.offsetWidth;
    if(titleWidth < 317) form.style.marginTop = "2rem";
    else defaultFormMargin();
});