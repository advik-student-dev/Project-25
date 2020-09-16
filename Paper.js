class paperClass {
    constructor(x, y, r) {
        var options =
        {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.9
        }
        this.x = x;
        this.r = r;
        this.y = y;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, (this.r - 10) / 2, options);



        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        imageMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}