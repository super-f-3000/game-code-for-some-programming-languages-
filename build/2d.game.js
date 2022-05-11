const GAME = {
  "languages": [],
  "addLanguage": function (name, languageName) {
    if (!GAME.languages[name]) {
      Game.languages[name] = {
        "name": languageName,
        "words": {}
      }
    }
  }
}
