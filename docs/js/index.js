const paginations = document.querySelectorAll(".smooth");
paginations.forEach(pagination => {
    pagination.addEventListener("click", e => {
        e.preventDefault();
        var targetId = e.target.hash;
        console.log(targetId);
        var target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const sections = document.querySelectorAll("section");
const observerRoot = document.querySelector("#main");
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
    var currentActiveIndex = document.querySelector(".pagination .active");
    if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove("active");
    }
    var newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    newActiveIndex.classList.add("active");
}
