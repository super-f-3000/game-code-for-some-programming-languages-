const languages = []
const GAME = {
  "Code_Version": "0.0.01",
  "Fonts": [],
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
      this.scale = new GAME.Vetor2(1, 1);
      this.userData = {};
      this.name = "";
      this.type = "Object2D";
      this.children = [];
    }
  },
  "FontLoader": class {
    constructor(src, name) {
      this.url = src;
      this.name = name;
      GAME.Fonts.push(this);
    }
  },
  "Scene" class {
    constructor() {
      this = new GAME.Object2D();
      this.type = "2D Scene";
    }
  }
}
