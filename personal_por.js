document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");
    let header = document.querySelector("header");
    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");
    let cvButton = document.querySelector(".btn[href='#']");
    let contactForm = document.querySelector(".Contact form");

    /* Section Scrolling Effect */
    window.onscroll = () => {
        let top = window.scrollY;
        sections.forEach((sec) => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");
            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => link.classList.remove("active"));
                let activeLink = document.querySelector(`header nav a[href*='${id}']`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
        header.classList.toggle("sticky", top > 100);
    };

    /* Mobile Menu Toggle */
    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    /* CV Download Functionality */
    if (cvButton) {
        cvButton.addEventListener("click", function (e) {
            e.preventDefault();
            let cvLink = "https://pdflink.to/faefbe04/"; //  CV link
            window.open(cvLink, "_blank");
        });
    }

    /* Contact Form Submission (Mock) */
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let name = document.querySelector("input[placeholder='Full Name']").value;
            let email = document.querySelector("input[placeholder='Email address']").value;
            let phone = document.querySelector("input[placeholder='Phone number']").value;
            let subject = document.querySelector("input[placeholder='Email Subject']").value;
            let message = document.querySelector("textarea").value;

            console.log("Form Submitted:", { name, email, phone, subject, message });
            alert("Thank you! Your message has been received.");
            contactForm.reset();
        });
    }

    /* Social Media Links */
    document.querySelectorAll(".social-media a").forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            let url = this.getAttribute("href");
            if (url !== "#") window.open(url, "_blank");
        });
    });
});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactMessage", message);

    alert("Message saved!");
});
