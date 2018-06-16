class Assets {
  constructor(){
    this.objs = [];
  }
  
  add(obj){
    this.objs.push(obj);
  }
  
  loadSpritesheet(game){
    console.log(this.objs)
    for (var i = 0; i < this.objs.length; i++) {
      var obj = this.objs[i]
      game.load.spritesheet(obj.id, 'assets/1x/' + obj.id + '.png', {
        frameWidth: obj.width,
        frameHeight: obj.height
      });
    }
  }
  
  animationsCreate(game){
    for (var i = 0; i < this.objs.length; i++) {
      var animations = this.objs[i].animations
      var id = this.objs[i].id

      for (var key in animations) {
        if (animations.hasOwnProperty(key)) {
          var animation = animations[key]
          game.anims.create({
            key: id + "_" + key,
            frames: game.anims.generateFrameNumbers(id, {
              start: animation.frameStart,
              end: animation.frameEnd
            }),
            frameRate: (animation.frameEnd - animation.frameStart) * 2.5,
            repeat: -1
          });
        }
      }
    }
  }
}
