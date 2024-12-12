import Item from "./Item";
import moment from "moment";

export default class Chocolate extends Item {
  constructor(quality = 58, goodForDays = 100) {
    super(quality, goodForDays);
  }
  calculateQuality(inventoryCurrentDate) {
    const currentDate = moment(inventoryCurrentDate);
    const arrivedDate = moment(this.arrivedDate);

    const differenceInDays = currentDate.diff(arrivedDate, "days");

    const decreaseQuality = Math.floor(differenceInDays / 3) * 2;

    this.quality -= decreaseQuality;
  }
}
