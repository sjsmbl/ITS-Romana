document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navigation.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // Automatically update the copyright year
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Prevent placeholder links from jumping to the top
    document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
        });
    });
});