var assets = [];

function addAssets(jsonFile) {
  $.getJSON(jsonFile, function(data) {
    assets.push(data)
  })
}


function assetsPreloadSpritesheet(game) {
  for (i = 0; i < assets.length; i++) {
    asset = assets[i]
    game.load.spritesheet(asset.id, 'assets/1x/' + asset.id + '.png', {
      frameWidth: asset.width,
      frameHeight: asset.height
    });
  }
}

function assetsCreateAnimation(game) {
  for (i = 0; i < assets.length; i++) {
    animations = assets[i].animations
    id = assets[i].id

    for (var key in animations) {
      if (animations.hasOwnProperty(key)) {
        animation = animations[key]
        game.anims.create({
          key: id + "_" + key,
          frames: game.anims.generateFrameNumbers(id, {
            start: animation.frameStart,
            end: animation.frameEnd
          }),
          frameRate: 9,
          repeat: -1
        });
      }
    }
  }
}
