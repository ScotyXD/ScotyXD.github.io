// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

  let slideIndex = 0;
    const slides = document.getElementsByClassName('slide');

    function changeSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }

        slideIndex++;

        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        }

        slides[slideIndex].style.opacity = 1;
        setTimeout(changeSlide, 3000); // Change image every 3 seconds
    }

    changeSlide();