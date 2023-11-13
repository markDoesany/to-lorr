const totalImages = 18; // Change this to the actual number of images you have

// Get the reference to the image-block div
const imageBlock = document.querySelector('.image-block');

// Assuming the desired number of images to display
const desiredImageCount = 54; // Change this to the desired number of images to display

// Iterate through the images using a loop
for (let i = 1; i <= desiredImageCount; i++) {
  // Create an img element
  const imgElement = document.createElement('img');

  // Set the src attribute to the image file path based on the naming convention
  const imageIndex = (i - 1) % totalImages + 1;
  imgElement.src = `./images/image-${imageIndex}.jpg`;

  // You can add additional attributes or styles if needed
  // imgElement.alt = 'Image description'; // Example of setting alt attribute

  // Append the img element to the image-block div
  imageBlock.appendChild(imgElement);
}