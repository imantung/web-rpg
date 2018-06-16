class Player2{
  
  constructor(armor, weapon){
    this.armor = armor
    this.weapon = weapon
  }
  
  create(game,x,y){
    this.armorSprite = game.physics.add.sprite(x, y, this.armor, 5);
    this.weaponSprite = game.physics.add.sprite(x, y, this.weapon, 5);
  }
  
  setVelocity(velocity){
    this.armorSprite.body.setVelocity(velocity);
    this.weaponSprite.body.setVelocity(velocity);
  }
  
  setVelocityX(velocityX){
    this.armorSprite.body.setVelocityX(velocityX);
    this.weaponSprite.body.setVelocityX(velocityX);  
  }
  
  setVelocityY(velocityY){
    this.armorSprite.body.setVelocityY(velocityY);
    this.weaponSprite.body.setVelocityY(velocityY);  
  }
  
  animateWalkRight(){
    this.armorSprite.anims.play(this.armor+'_walk_right', true);
    this.weaponSprite.anims.play(this.weapon+'_walk_right', true);
    this.armorSprite.flipX = false
    this.weaponSprite.flipX = false
  }
  
  animateWalkLeft(){
    this.armorSprite.anims.play(this.armor+'_walk_right', true);
    this.weaponSprite.anims.play(this.weapon+'_walk_right', true);
    this.armorSprite.flipX = true
    this.weaponSprite.flipX = true
  }
  
  animateWalkUp(){
    this.armorSprite.anims.play(this.armor+'_walk_up', true);
    this.weaponSprite.anims.play(this.weapon+'_walk_up', true);
    this.armorSprite.flipX = false
    this.weaponSprite.flipX = false
  }
  
  animateWalkDown(){
    this.armorSprite.anims.play(this.armor+'_walk_down', true);
    this.weaponSprite.anims.play(this.weapon+'_walk_down', true);
    this.armorSprite.flipX = false
    this.weaponSprite.flipX = false
  }
  
  stopAnimate(){
    this.armorSprite.anims.stop();
    this.weaponSprite.anims.stop();
  }

}
