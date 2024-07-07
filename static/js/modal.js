document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll(".markdown-content img");
    var currentImageIndex = -1;

    // Ensure modal is hidden initially
    modal.style.display = "none";

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            currentImageIndex = index;
            document.body.style.overflow = "hidden"; // Prevent scrolling
        });
    });

    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() { 
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    }

    document.addEventListener("keydown", function(event) {
        if (modal.style.display === "flex") {
            if (event.key === "Escape") {
                modal.style.display = "none";
                document.body.style.overflow = "auto"; // Restore scrolling
            } else if (event.key === "ArrowRight") {
                changeSlide(1);
            } else if (event.key === "ArrowLeft") {
                changeSlide(-1);
            }
        }
    });

    window.changeSlide = function(n) {
        if (currentImageIndex === -1) {
            return; // Prevent slide change if no image is open
        }
        currentImageIndex += n;
        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }
        modalImg.src = images[currentImageIndex].src;
        captionText.innerHTML = images[currentImageIndex].alt;
    }
});