var sections = document.querySelectorAll('section');
var navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        var top = window.scrollY;
        var offset = section.offsetTop - 150;
        var height = section.offsetHeight
        var id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
