class Bob {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      restitution: 1.4,
      friction: 40,
      density: 1.2,
    };
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options);
    World.add(world, this.body);
  }
  display() {
    var bobpos = this.body.position;

    push();
    translate(bobpos.x, bobpos.y);
    rectMode(CENTER);
    fill(255, 74, 94);
    ellipse(0, 0, this.r);
    pop();
  }
}
