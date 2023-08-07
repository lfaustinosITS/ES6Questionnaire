function randomRGBValue(a) {
    const lowerBound = -a;
    const result = lowerBound + Math.round(Math.random() * 255);//Random integer that can be add to 'a' and remain between 0 and 255
    return result
}

function changeColor() {
    const square = document.querySelector('.square');
    const currentColor = getComputedStyle(square).backgroundColor;
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const match = regex.exec(currentColor);


    const r = parseInt(match[1]);
    const g = parseInt(match[2]);
    const b = parseInt(match[3]);

    const x = r + randomRGBValue(r);
    const y = g + randomRGBValue(g);
    const z = b + randomRGBValue(b);

    const newColor = `rgb(${x}, ${y}, ${z})`;
    console.log(newColor);
    square.style.backgroundColor = newColor;
}