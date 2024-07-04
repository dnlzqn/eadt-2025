var mX, mY;
var x = 0;
var y = 0;
var easing = 0.01; // Factor de suavizado menor para una interpolación más fluida
var colorEasing = 0.01; // Factor de suavizado para el color
var w;
var windowWidth, windowHeight;
var currentColor = { r: 0, g: 0, b: 0 };
var currentEllipseSize = 0; // Tamaño actual de la elipse

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight + 200);
    x = mX = random(windowWidth);
    y = mY = random(windowHeight);
    cnv.class('mycanvasclass');
    cnv.id('mycanvasid');
    background(255);
    w = new randomWalker(0, 200);
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    window.addEventListener("resize", function() {
        if (window.innerWidth != windowWidth) {
            windowWidth = window.innerWidth;
            windowHeight = window.innerHeight;
            resizeCanvas(windowWidth, windowHeight);
        }
    });
}

function draw() {
    for (let i = 0; i < 10; i++) { // Incrementar el número de pasos de interpolación
        x = lerp(x, mX, easing);
        y = lerp(y, mY, easing);
        w.display();
        w.step();
    }
}

function mousePressed() {
    updateMousePosition();
}

function mouseMoved() {
    updateMousePosition();
}

function touchStarted() {
    updateMousePosition();
}

function touchMoved() {
    updateMousePosition();
}

function updateMousePosition() {
    mX = mouseX;
    mY = mouseY;
}

function randomWalker(temptx, tempty) {
    this.x = 0;
    this.y = 0;
    this.tx = temptx;
    this.ty = tempty;
    this.col = 1;

    this.step = function() {
        this.x = map(noise(this.tx), 0, 1, 0, mouseX);
        this.y = map(noise(this.ty), 0, 1, 0, mouseY);
        this.tx += 0.00081;
        this.ty += 0.00081;
    };

    this.display = function() {
        this.col += 0.0219;
        let col_perlin = map(noise(this.col), 0, 1, 0, 250);
        let colornoise = map(noise(0), 0, 1, 0, 200);

        // Interpolación de color
        let targetColor = {
            r: col_perlin + (mouseX / 20),
            g: colornoise + (mouseY / 10),
            b: this.x - col_perlin
        };
        
        currentColor.r = lerp(currentColor.r, targetColor.r, colorEasing);
        currentColor.g = lerp(currentColor.g, targetColor.g, colorEasing);
        currentColor.b = lerp(currentColor.b, targetColor.b, colorEasing);
        
        noStroke();
        fill(currentColor.r, currentColor.g, currentColor.b);

        // Interpolación de tamaño de la elipse
        let targetEllipseSize = map(noise(this.col), 0, 1, 0.8, 500);
        currentEllipseSize = lerp(currentEllipseSize, targetEllipseSize, easing);
        
        ellipse(x, y, currentEllipseSize, currentEllipseSize);
    };
}
