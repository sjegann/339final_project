document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    const images = document.querySelectorAll(".photo-item img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
  
    const img = document.createElement("img");
    lightbox.appendChild(img);
  
    images.forEach(image => {
      image.addEventListener("click", () => {
        img.src = image.src;
        lightbox.classList.add("show");
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("show");
      img.src = "";
    });
});