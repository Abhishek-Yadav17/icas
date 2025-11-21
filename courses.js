const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
});

document.querySelectorAll(".video-box").forEach(box => {
    const video = box.querySelector("video");
    const btn = box.querySelector(".play-btn");

    btn.onclick = () => {
        if (video.paused) {
            video.play();
            btn.style.display = "none";
        } else {
            video.pause();
            btn.style.display = "block";
        }
    };

    video.onclick = () => {
        video.pause();
        btn.style.display = "block";
    };
});
