class MenuInterface {
    constructor() {
      if(!this.getItems) {
        throw new Error("Menu's must have items!");
      }
    }
  }
