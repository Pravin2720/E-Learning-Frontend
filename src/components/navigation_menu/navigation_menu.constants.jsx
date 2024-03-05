export class alignOption {
  static Left = new alignOption("left");
  static Center = new alignOption("center");
  static Right = new alignOption("right");

  constructor(name) {
    this.name = name;
  }
}
