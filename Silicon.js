document.addEventListener("DOMContentLoaded", () => {
    const FAQboxes = document.querySelectorAll(".FAQ-box")

    FAQboxes.forEach(box => {
        box.addEventListener("click", () => {
        
            const valueNumber = box.getAttribute("data-value");
            const correspondingDescription = document.querySelector(`.FAQ-descriptions[data-value="${valueNumber}"]`);
            box.classList.toggle('active');
            correspondingDescription.classList.toggle('active');
        });
    });
});
