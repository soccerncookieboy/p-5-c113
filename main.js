function setup() {
    canvas = createCanvas(400, 480)
    canvas.position(310, 250)
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 400, 480)
    circle(10,10,20)
    circle(390,10,20)
    circle(10,470,20)
    circle(390,470,20)
    rect(20,0,55,100)
    rect(0,20,55,100)
    rect(380,20,55,100)
    rect(20,380,55,100)
}
function take_snapshot(){
    save("picture.png")
}