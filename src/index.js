var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'phaser-example',
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
var map;
var cursors;
var debugGraphics;
var player;
var showDebug = false;

var info;

function preload() {
  this.load.image('tiles', 'assets/tilemaps/tiles/catastrophi_tiles_16.png');
  this.load.tilemapCSV('map', 'assets/tilemaps/csv/catastrophi_level2.csv');
  preloadPlayerSpreadsheet(this)
}

function create() {
  // When loading a CSV map, make sure to specify the tileWidth and tileHeight
  map = this.make.tilemap({
    key: 'map',
    tileWidth: 16,
    tileHeight: 16
  });
  var tileset = map.addTilesetImage('tiles');
  var layer = map.createStaticLayer(0, tileset, 0, 0);

  //  This isn't totally accurate, but it'll do for now
  map.setCollisionBetween(54, 83);
  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  createPlayerAnimation(this)

  player = new Player(this, layer)


  debugGraphics = this.add.graphics();

  this.input.keyboard.on('keydown_C', function(event) {
    showDebug = !showDebug;
    debugGraphics.clear();

    if (showDebug) {
      // Pass in null for any of the style options to disable drawing that component
      map.renderDebug(debugGraphics, {
        tileColor: null, // Non-colliding tiles
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200), // Colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Colliding face edges
      });
    }

    info.update(showDebug)
  });

  cursors = this.input.keyboard.createCursorKeys();
  
  info = new Information(this)
  info.update()
}

function update(time, delta) {
  player.updateMovement(cursors)
}
