function drawScreen() {
    const screen = document.querySelector('#screen');
    for (i = 1; i <= 16; i++) {
        const row = document.createElement('div');
        row.setAttribute('style', 'display: flex;')
        for (j = 1; j <= 16; j++) {
            const pixel = document.createElement('div');
            pixel.setAttribute
                ('style', 'border: 1px solid black; width: 20px; height: 20px');
            // pixel.setAttribute('id', i + '-' + j)
            pixel.setAttribute('class', 'pixel');
            row.appendChild(pixel);
        }
        screen.appendChild(row);
    }
    const allPixels = document.querySelectorAll("div.pixel");
    allPixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.setAttribute('class', 'pixel; filledPixel');
        })
    })
}

drawScreen();