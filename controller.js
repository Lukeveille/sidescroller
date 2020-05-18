class Controller {
  constructor() {
    this.down  = new Controller.ButtonInput();
    this.left  = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();
    this.up    = new Controller.ButtonInput();
  }
  
  keyDownUp(event) {

    var down = (event.type == "keydown") ? true : false;

    switch(event.keyCode) {

      case 37: this.left.getInput(down); break;
      case 38: this.up.getInput(down); break;
      case 39: this.right.getInput(down); break;
      case 40: this.down.getInput(down); break;

    }

    alert("You pressed a key (" + event.keyCode + ")!");

  }
  
  handleKeyDownUp = (event) => {
    this.keyDownUp(event);
  }
}

Controller.prototype = {

  constructor : Controller

}

Controller.ButtonInput = function() {

  this.active = this.down = false;

}

Controller.ButtonInput.prototype = {

  constructor : Controller.ButtonInput,

  getInput : function(down) {

    if (this.down != down) this.active = down;
    this.down = down;

  }

}