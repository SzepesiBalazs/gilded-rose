import moment from "moment";

export default class Inventory {
  constructor() {
    this.items = [];
    this.currentDate = moment().format("YYYY-MM-DD");
  }

  addItem(item) {
    this.items.push(item);
  }

  removeExpiredItems() {
    this.items = this.items.filter(
      (item) =>
        item.goodForDays === Infinity ||
        (moment(item.expiryDate).isAfter(moment(this.currentDate)) &&
          item.quality > 0)
    );
  }

  handleItems() {
    this.removeExpiredItems();
    this.calculateQuality();
  }

  calculateQuality() {
    this.items.forEach((item) =>
      item.calculateQuality(this.currentDate)
    );
  }
}
