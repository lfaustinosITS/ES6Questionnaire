function moveLeft() {
    const square = document.querySelector('.square');
    const currentPosition = parseFloat(getComputedStyle(square).left) || 0;
    const targetPosition = currentPosition - 100; // Move 100 pixels to the left
    console.log(currentPosition,targetPosition);
    square.style.left = `${targetPosition}px`;
}
function moveRight() {
    const square = document.querySelector('.square');
    const currentPosition = parseFloat(getComputedStyle(square).left) || 0;
    const targetPosition = currentPosition + 100; // Move 100 pixels to the right
    console.log(currentPosition,targetPosition);
    square.style.left = `${targetPosition}px`;
}
function moveUp() {
    const square = document.querySelector('.square');
    const currentPosition = parseFloat(getComputedStyle(square).top) || 0;
    const targetPosition = currentPosition - 100; // Move 100 pixels up

    square.style.top = `${targetPosition}px`;
}
function moveDown() {
    const square = document.querySelector('.square');
    const currentPosition = parseFloat(getComputedStyle(square).top) || 0;
    const targetPosition = currentPosition + 100; // Move 100 pixels down

    square.style.top = `${targetPosition}px`;
}

function inflate() {
    const square = document.querySelector('.square');
    const currentBorderRadius = parseFloat(getComputedStyle(square).borderRadius) || 0;
    const currentWidth = parseFloat(getComputedStyle(square).width) || 0;
    const currentHeight = parseFloat(getComputedStyle(square).height) || 0;
    const targetBorderRadius = currentBorderRadius + 10; 
    const targetWidth = currentWidth + 10; 
    const targetHeight = currentHeight + 10; 

    square.style.borderRadius = `${targetBorderRadius}px`;
    square.style.width = `${targetWidth}px`;
    square.style.height = `${targetHeight}px`;
}

function deflate() {
    const square = document.querySelector('.square');
    const currentBorderRadius = parseFloat(getComputedStyle(square).borderRadius) || 0;
    const currentWidth = parseFloat(getComputedStyle(square).width) || 0;
    const currentHeight = parseFloat(getComputedStyle(square).height) || 0;
    const targetBorderRadius = currentBorderRadius - 10; 
    const targetWidth = currentWidth - 10; 
    const targetHeight = currentHeight - 10; 

    square.style.borderRadius = `${targetBorderRadius}px`;
    square.style.width = `${targetWidth}px`;
    square.style.height = `${targetHeight}px`;
}