// Function to handle image gallery for each project
function changeImage(projectId, direction) {
    const galleryImages = document.querySelectorAll(`#${projectId} .gallery-image`);
    const totalImages = galleryImages.length;

    // Find the currently visible image
    let currentImageIndex = -1;
    galleryImages.forEach((image, index) => {
        if (image.style.display === 'block') {
            currentImageIndex = index;
        }
    });

    // Hide the current image
    galleryImages[currentImageIndex].style.display = 'none';

    // Increment or decrement the image index based on the direction
    currentImageIndex += direction;

    // Loop back to the beginning or end of the images array
    if (currentImageIndex >= totalImages) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = totalImages - 1;
    }

    // Show the new image
    galleryImages[currentImageIndex].style.display = 'block';
}

// Automatically change image every 4 seconds for each project
setInterval(() => changeImage('project1', 1), 4000);
setInterval(() => changeImage('project2', 1), 4000);
setInterval(() => changeImage('project3', 1), 4000);
