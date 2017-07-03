class Ball {
    constructor(centerx,centery,radius) {
        this.position = new Vector(centerx,cenetery)
        this.radius = radius
    }
    applyVelocity(velvec) {
        this.vel = velvec
    }
    applyForce(force) {
        this.acc = force/1
    }
    draw() {
        context.fillStyle = '#C2185B'
        context.save()
        context.translate(this.position.x,this.position.y)
        context.beginPath()
        context.arc(0,0,this.radius,0,2*Math.PI)
        context.fill()
        context.restore()
    }
    update() {
        this.position.add(this.vel)
        this.vel.add(this.acc)
    }
}
