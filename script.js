// Simple JS to switch between images in the gallery
function changeImage(projectId, direction) {
    const images = document.querySelectorAll(`#${projectId} .gallery-images img`);
    let currentImageIndex = Array.from(images).findIndex(img => img.style.display === 'block');
    
    if (currentImageIndex === -1) {
        currentImageIndex = 0; // Default to the first image if no image is visible
    }

    // Hide the current image
    images[currentImageIndex].style.display = 'none';

    // Update the index based on direction (-1 for previous, 1 for next)
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

    // Show the next/previous image
    images[currentImageIndex].style.display = 'block';
}

// Remove the following setInterval functions to stop auto-shuffling
// setInterval(() => changeImage('project1', 1), 4000);
// setInterval(() => changeImage('project2', 1), 4000);
// setInterval(() => changeImage('project3', 1), 4000);
