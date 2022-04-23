const paginations = document.querySelectorAll(".paginationBox a");
paginations.forEach(pagination => {
    pagination.addEventListener("click", e => {
        e.preventDefault();
        var targetId = e.target.hash;
        var target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const sections = document.querySelectorAll("section");
const observerRoot = document.querySelector("main");
const options = {
    root: observerRoot,
    rootMargin: "-50% 0px",
    threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
sections.forEach(section => {
    observer.observe(section);
});

function doWhenIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            activatePagination(entry.target);
        }
    });
}

function activatePagination(element) {
    const currentActiveIndex = document.querySelector("paginationBox .active");
    if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove("active");
    }
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    newActiveIndex.classList.add("active");
}
