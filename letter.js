class Letter {
  constructor(value, isGuessed) {
    this.value = value;
    this.isGuessed = isGuessed;
  }
  display() {
    if(isGuessed) {
      return this.value;
    }
    return "_";
  }
}

export default Letter;
