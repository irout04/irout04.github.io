function drawHeart(x, y, size) {
    beginShape();
    vertex(x, y + size / 4);
    // left lobe
    bezierVertex(
      x - size / 2, y - size / 4,
      x - size,     y + size / 2,
      x,            y + size
    );
    // right lobe
    bezierVertex(
      x + size,     y + size / 2,
      x + size / 2, y - size / 4,
      x,            y + size / 4
    );
    endShape(CLOSE);
  }
  
  const colors = ['#FFC0CB','#FFD1DC','#FFE4E1','#FFB6C1','#FF69B4','#FF1493'];
  const MAX_W = 600, MAX_H = 400;
  
  function setup() {
    // keep canvas no bigger than 600x400, or 90% of window
    const w = min(windowWidth * 0.95, MAX_W);
    const h = min(windowHeight * 0.7, MAX_H);
    const canvas = createCanvas(w, h);
    canvas.parent('sketch-wrapper');
    noLoop();  // draw only once
  }
  
  function draw() {
    background('#FFF0F5');
    noStroke();
    // scatter 12 pastel hearts
    for (let i = 0; i < 12; i++) {
      const sz = random(30, 80);
      const x  = random(sz, width - sz);
      const y  = random(sz, height - sz);
      fill(random(colors));
      drawHeart(x, y, sz);
    }
  }
  
  function windowResized() {
    const w = min(windowWidth * 0.9, MAX_W);
    const h = min(windowHeight * 0.6, MAX_H);
    resizeCanvas(w, h);
  }
  