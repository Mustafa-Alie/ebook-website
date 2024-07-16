function userScroll() {
    const navbar = document.querySelector('.navbar');

    //listen to the vertical scroll on the window object
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark');
            navbar.classList.add('navbar-custom');
        } else {
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('navbar-custom');
        }
    });
};

//run the function when the content is loaded:
document.addEventListener('DOMContentLoaded', userScroll);


