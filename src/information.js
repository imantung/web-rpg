class Information {
  constructor(game) {
    this.text = game.add.text(16, 16, "n/a", {
      fontSize: '18px',
      fill: '#ffffff'
    });
    this.text.setScrollFactor(0);
    this.update()
  }
  
  update(isDebug){
    this.text.setText('Arrow keys to move.' +
      '\nPress "C" to toggle debug visuals: ' + (isDebug ? 'on' : 'off'));
  }
}
