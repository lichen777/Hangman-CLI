class Letter {
  constructor(value, isGuessed) {
    this.value = value;
    this.isGuessed = isGuessed;
  }
  display() {
    if(this.isGuessed) {
      return this.value;
    }
    return "_";
  }
}

module.exports = Letter;
