// Create functionality for the back-to-top button
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");

    // Show the button when scrolling down
    window.onscroll = () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
