document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    const images = document.querySelectorAll(".photo-item img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
  
    const lightboxImg = document.createElement("img");
    lightboxImg.alt = "";
    lightbox.appendChild(lightboxImg);
  
    images.forEach(image => {
      image.addEventListener("click", () => {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightbox.classList.add("show");
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("show");
      lightboxImg.src = "";
    });
});