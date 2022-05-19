class dialogLine {
  constructor(parameters) {
    if (typeof parameters === "object") {
      if (parameters.title) {
        this.title = parameters.title;
      }else{
        this.title = "";
      }
    }else{
      console.error("in this class you have to use an object");
    }
  }
}
