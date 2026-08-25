/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (
        navMenu.classList.contains("active")
    ) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});



/* ================= CLOSE MOBILE MENU ================= */

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


navLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navMenu.classList.remove(
                "active"
            );

            menuBtn.textContent = "☰";

        }
    );

});



/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".service-card, " +
        ".project, " +
        ".price-card, " +
        ".process-item, " +
        ".section-heading"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function(element) {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, " +
            "transform 0.8s ease";

        observer.observe(element);

    }
);



/* ================= NAVBAR SCROLL ================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,5,5,0.96)";

        } else {

            navbar.style.background =
                "rgba(7,7,7,0.82)";

        }

    }
);



/* ================= BUTTON EFFECT ================= */

const buttons =
    document.querySelectorAll(
        ".price-btn"
    );


buttons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                console.log(
                    "Ventora Media project selected."
                );

            }
        );

    }
);
      
