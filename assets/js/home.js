
const Rotate = {
  obj: document.querySelector('.cube'),
  val: 0,
  add: 90,
  axis:["X","Y"],
  count: 0,
  dir: 1,
  animation: function(){
    this.count ++;
    if(this.count > 360 / 90){
      this.count = 0;
      this.dir *= -1;
    }
    let randomIndex = Math.floor(Math.random() * 2); 
    this.val = this.val + (this.add * this.dir);
    return this.obj.style.transform = `rotate${this.axis[randomIndex]}(${this.val}deg)`
  }
}

setInterval(() => {Rotate.animation()}, 3500);


