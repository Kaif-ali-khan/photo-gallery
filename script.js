// Function to update the content and background of the image div
function upDate(previewPic) {
    // Log to verify the event is triggering and previewPic info
    console.log(previewPic); // log the previewPic object
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Update the text content of the div with id="image"
    document.getElementById('image').textContent = previewPic.alt;

    // Change the background image of the div with id="image"
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
}

// Function to undo changes and reset the image div
function undo() {
    // Reset the background image and text content
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').textContent = "Hover over an image below to display here.";
}

// Adding event listeners to images
const images = document.querySelectorAll('.preview');
images.forEach(image => {
    image.addEventListener('mouseover', function() {
        upDate(image);
    });
});

// Adding an event listener to reset on mouseout
document.getElementById('image').addEventListener('mouseout', undo);
