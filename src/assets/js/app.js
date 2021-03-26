// Functions for fade-in effect on load

export const navBarFade = (navBar) => {
    setTimeout(() => {
        navBar(true);
    }, 200)
}

export const marqueeFade = (background, marquee) => {
    setTimeout(() => {
        background(true);
    }, 0)
    setTimeout(() => {
        marquee(true);
    }, 500)
}