function etchSketch() {
    let size = 16;
    drawScreen(size);
}

function drawScreen(size) {
    let dimensions = 1000/size
    const screen = document.querySelector('#screen');
    for (i = 1; i <= size; i++) {
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex;')
        for (j = 1; j <= size; j++) {
            const pixel = document.createElement('div');
            pixel.setAttribute('style', 'border: 1px solid black;'
                 + ' width: ' + dimensions + 'px; height: ' + dimensions + 'px;');
            // pixel.setAttribute('id', i + '-' + j)
            pixel.setAttribute('class', 'pixel');
            row.appendChild(pixel);
        }
        screen.appendChild(row);
    }
    colorPixels();
}

function colorPixels() {
    const allPixels = document.querySelectorAll("div.pixel");
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('class', 'pixel; filledPixel');
        })
    })
}

etchSketch();

const sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener('click', () => {
    document.querySelector('#screen').innerHTML = "";
    let size = prompt("Enter how many pixels wide you want the screen to be (max 100)");
    if (size > 100) {size = 100};
    drawScreen(size);
})