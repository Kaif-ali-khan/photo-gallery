// Function to update the content and background of the image div
function upDate(previewPic) {
    console.log("Mouseover or focus triggered for:", previewPic.alt);
    const imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

// Function to undo changes and reset the image div
function undo() {
    console.log("Mouseout or blur triggered");
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "";
    imageDiv.textContent = "Hover over an image below to display here.";
}

// Function to add tabindex and console log on load
function onLoadPage() {
    console.log("Page loaded. Adding tabindex attributes.");
    const images = document.querySelectorAll('.preview');
    images.forEach((image, index) => {
        image.setAttribute("tabindex", index + 1); // Ensure all images are keyboard navigable
    });
}

// Adding event listeners
document.addEventListener("DOMContentLoaded", onLoadPage);

const images = document.querySelectorAll('.preview');

images.forEach(image => {
    // Mouse events
    image.addEventListener('mouseover', function() {
        upDate(image);
    });
    image.addEventListener('mouseout', undo);

    // Keyboard focus events
    image.addEventListener('focus', function() {
        upDate(image);
    });
    image.addEventListener('blur', undo);
});
