document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".section");

    function checkBoxesInView() {
        boxes.forEach((box) => {
            const rect = box.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight * 0.95 && rect.bottom >= 0;

            if (isInView) {
                box.classList.add("active");
            } else {
                box.classList.remove("active");
            }
        });
    }

    // Initial check
    checkBoxesInView();

    // Check on scroll
    document.addEventListener("scroll", checkBoxesInView);
});


