// Simple highlight effect for nav bar
document.querySelectorAll(".bottom-nav a").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".bottom-nav .active")?.classList.remove("active");
        btn.classList.add("active");
    });
});
