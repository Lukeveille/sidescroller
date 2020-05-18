// @ts-nocheck
window.addEventListener('load', e => {
  
  'use strict';

  const render = () => {
    display.renderColor(game.color);
    display.render();
  }

  const update = () => {
    game.update();
  }
  
  const controller = new Controller();
  
  const display = new Display(document.querySelector('canvas'));
  
  const game = new Game();
  
  const engine = new Engine(1000/30, render, update);
  
  window.addEventListener('resize', display.handleResize);
  window.addEventListener('keydown', controller.handleKeyDownUp);
  window.addEventListener('keyup', controller.handleKeyDownUp);

  display.resize();
  engine.start();
})
