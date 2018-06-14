function preloadPlayer(game) {
  game.load.spritesheet('player', 'assets/sprites/spaceman.png', {
    frameWidth: 16,
    frameHeight: 16
  });
}

function creatingPlayerAnimation(game) {
  game.anims.create({
    key: 'left',
    frames: game.anims.generateFrameNumbers('player', {
      start: 8,
      end: 9
    }),
    frameRate: 10,
    repeat: -1
  });
  game.anims.create({
    key: 'right',
    frames: game.anims.generateFrameNumbers('player', {
      start: 1,
      end: 2
    }),
    frameRate: 10,
    repeat: -1
  });
  game.anims.create({
    key: 'up',
    frames: game.anims.generateFrameNumbers('player', {
      start: 11,
      end: 13
    }),
    frameRate: 10,
    repeat: -1
  });
  game.anims.create({
    key: 'down',
    frames: game.anims.generateFrameNumbers('player', {
      start: 4,
      end: 6
    }),
    frameRate: 10,
    repeat: -1
  });
}


class Player {
  constructor(game) {
    this.sprite = game.physics.add.sprite(50, 100, 'player', 1);
    game.cameras.main.startFollow(this.sprite);
  }

  updateMovement(cursors) {
    this.sprite.body.setVelocity(0);

    // Horizontal movement
    if (cursors.left.isDown) {
      this.sprite.body.setVelocityX(-100);
    } else if (cursors.right.isDown) {
      this.sprite.body.setVelocityX(100);
    }

    // Vertical movement
    if (cursors.up.isDown) {
      this.sprite.body.setVelocityY(-100);
    } else if (cursors.down.isDown) {
      this.sprite.body.setVelocityY(100);
    }

    // Update the animation last and give left/right animations precedence over up/down animations
    if (cursors.left.isDown) {
      this.sprite.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.sprite.anims.play('right', true);
    } else if (cursors.up.isDown) {
      this.sprite.anims.play('up', true);
    } else if (cursors.down.isDown) {
      this.sprite.anims.play('down', true);
    } else {
      this.sprite.anims.stop();
    }
  }
}
