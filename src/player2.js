class Player2{
  
  constructor(armor, weapon){
    this.armor = armor;
    this.weapon = weapon;
    this.state = 'idle';
    this.face = 'right';
    this.speed = 100;
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
  
  idle(){
    this.setVelocity(0)
    this.state = 'idle';
  }
  
  animate(){
    var armorAnimKey;
    var weaponAnimKey;
    var state = this.state;
    var face = this.face;
    
    if(face == 'left'){
      armorAnimKey = this.armor+'_'+state+'_right'
      weaponAnimKey = this.weapon+'_'+state+'_right'
      this.armorSprite.flipX = true
      this.weaponSprite.flipX = true  
    } else{
      armorAnimKey = this.armor+'_'+state+'_'+face
      weaponAnimKey = this.weapon+'_'+state+'_'+face
      this.armorSprite.flipX = false
      this.weaponSprite.flipX = false  
    }
    
    this.armorSprite.anims.play(armorAnimKey, true);
    this.weaponSprite.anims.play(weaponAnimKey, true);
  }
  
  walkUp(){
    this.setVelocityY(-this.speed);
    this.face = 'up';
    this.state = 'walk';
  }
  
  walkDown(){
    this.setVelocityY(this.speed);
    this.face = 'down';
    this.state = 'walk';
  }
  
  walkLeft(){
    this.setVelocityX(-this.speed);
    this.face = 'left';
    this.state = 'walk';
  }
  
  walkRight(){
    this.setVelocityX(this.speed)
    this.face = 'right';
    this.state = 'walk';
  }

}
