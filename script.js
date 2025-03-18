function filterProjects(category) {
            let containers = document.querySelectorAll('.projectContainer');
            containers.forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(category).classList.add('active');
        }
        

document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { id: "aboutdiv", link: document.querySelector('a[href="#aboutdiv"] h1') },
        { id: "skilldiv", link: document.querySelector('a[href="#skilldiv"] h1') },
        { id: "projectdiv", link: document.querySelector('a[href="#projectdiv"] h1') }
    ];

    function highlightCurrentSection() {
        let scrollPosition = window.scrollY + 100; // Adding 100px offset for better accuracy

        sections.forEach(section => {
            let element = document.getElementById(section.id);
            if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
                section.link.classList.add("active");
            } else {
                section.link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", highlightCurrentSection);
});