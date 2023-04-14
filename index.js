class Sonic {
    constructor() {
        this.index = 1;
    }

    Jogging() {
        this.maxFrames = 8;
        this.imgSrc = `.\\jogging\\${this.index}.png`;
    }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let sonic = new Sonic
let index = 1;
let frame = 0;

let xPos = 0;

let img = new Image();

function animate() {

    // Set Canvas width & height
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // clear canvas
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    img.src = `.\\sprites\\jogging\\${index}.png`;
    ctx.drawImage(img, xPos, 1, img.width/3, img.height/3);

    ctx.drawImage(img, xPos, 200, img.width/3, img.height/3);

    ctx.drawImage(img, xPos, 400, img.width/3, img.height/3);

    if(frame % 5 == 0) {
        if(xPos > window.innerWidth)
            xPos = -img.width;
        else
            xPos+=13;

        if (index >= 8)
            index = 1;
        
        else
            index++;
    }

    frame++;

    window.requestAnimationFrame(animate);
}

// Call animate function
animate();
