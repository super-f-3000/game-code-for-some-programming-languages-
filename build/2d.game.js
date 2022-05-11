const languages = []
const GAME = {
  "Code_Version": "0.0.01",
  "Vector2": class {
    constructor (x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }
  "KeyEvent": class {
    constructor(element, event, Function) {
      element.addEventListener(event, Function);
    }
  },
  "Object2D": class {
    constructor() {
      this.position = new GAME.Vector2();
      this.rotation = new GAME.Vector2();
      this.scale = new GAME.Vetor2();
      this.userData = {};
      this.name = "";
      this.type = "Object2D";
      this.children = [];
    }
  }
}
