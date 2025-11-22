// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    // Dropdowns: click to open on small screens
    const dropdownParents = document.querySelectorAll(".has-dropdown");

    dropdownParents.forEach(parent => {
        const button = parent.querySelector(".dropdown-toggle");
        const menu = parent.querySelector(".dropdown");

        if (!button || !menu) return;

        button.addEventListener("click", (e) => {
            const isMobile = window.matchMedia("(max-width: 800px)").matches;
            if (isMobile) {
                e.preventDefault();
                const open = menu.style.display === "block";
                // Close all others
                document.querySelectorAll(".has-dropdown .dropdown").forEach(d => {
                    d.style.display = "none";
                });
                menu.style.display = open ? "none" : "block";
            }
        });

        // Simple hover on desktop
        parent.addEventListener("mouseenter", () => {
            const isDesktop = window.matchMedia("(min-width: 801px)").matches;
            if (isDesktop) menu.style.display = "block";
        });
        parent.addEventListener("mouseleave", () => {
            const isDesktop = window.matchMedia("(min-width: 801px)").matches;
            if (isDesktop) menu.style.display = "none";
        });
    });

    // Fake form submit handlers (no backend yet)
    const forms = document.querySelectorAll("form[data-form]");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your information has been received. We will contact you shortly.");
            form.reset();
        });
    });

    // Accordion
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        const panel = item.querySelector(".accordion-panel");
        if (!header || !panel) return;

        header.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            // Close all
            accordionItems.forEach(i => {
                i.classList.remove("open");
                const p = i.querySelector(".accordion-panel");
                if (p) p.style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add("open");
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
