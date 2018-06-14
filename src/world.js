function preloadWorld(game) {
  game.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
  game.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
}

class World{
  constructor(game) {
    this.map = game.make.tilemap({
      key: 'map',
      tileWidth: 16,
      tileHeight: 16
    });
    
    
    var tileset = this.map.addTilesetImage('tiles');
    this.layer = this.map.createStaticLayer(0, tileset, 0, 0);
    this.map.setCollisionBetween(54, 83);
    
    
    game.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
  }
  
  addCollider(game, sprite){
    
  }

}
