class PhysicsBody {
    constructor(centerx,centery,radius,color) {
        this.position = new Vector(centerx,centery)
        this.radius = radius
        this.color = color
    }
    applyVelocity(velvec) {
        this.vel = velvec
    }
    applyForce(force) {
        this.acc = force
    }
    draw(context) {
        context.fillStyle = this.color
        context.save()
        context.translate(this.position.x,this.position.y)
        context.beginPath()
        context.arc(0,0,this.radius,0,2*Math.PI)
        context.fill()
        context.restore()
        console.log(this.position)
    }
    update() {
        this.position.add(this.vel)
        this.vel.add(this.acc)
    }
}
