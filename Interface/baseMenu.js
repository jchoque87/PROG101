class BaseMenu extends MenuInterface {
    constructor() {
      super();
      this.items = [];
    }
    get getItems() {
      return items;
    }
  }
  export default new BaseMenu();  // No Error, has the method!
  