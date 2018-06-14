class Debug{
  constructor(game) {
    this.graphics = game.add.graphics();
    this.isShow = false
  }
  
  toggleShow(map){
    this.isShow = !this.isShow;
    this.graphics.clear();

    if (this.isShow) {
      // Pass in null for any of the style options to disable drawing that component
      map.renderDebug(this.graphics, {
        tileColor: null, // Non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges
      });
    }
    
    return this.isShow
  }
}
