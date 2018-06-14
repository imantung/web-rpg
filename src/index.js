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
var cursors;

var world;
var player;
var debug;
var info;

function preload() {
  preloadWorld(this)
  preloadPlayerSpreadsheet(this)
}

function create() {
  createPlayerAnimation(this)

  world = new World(this);
  player = new Player(this)
  this.physics.add.collider(player.sprite, world.layer);
  
  debug = new Debug(this)
  info = new Information(this)
  info.update()

  this.input.keyboard.on('keydown_C', function(event) {
    var isDebug = debug.toggleShow(world.map)
    info.update(isDebug)
  });

  cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta) {
  player.updateMovement(cursors)
}
