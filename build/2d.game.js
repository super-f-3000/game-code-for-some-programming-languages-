class dialogLine {
  constructor(parameters) {
    if (typeof parameters === "object") {
      if (parameters.title) {
        this.title = parameters.title;
      }else{
        this.title = "";
      }
      if (parameters.texts) {
        if (parameters.texts === []) {
          this.texts = parameters.texts;
        }else if (parameters.texts === undefined) {
          this.texts = [];
        }else{
          console.error("parameters.texts has to be an array");
          this.texts = [];
        }
      }
    }else{
      console.error("in this class you have to use an object");
    }
  }
}
