import moment from "moment";

export default class Item {
  constructor(quality = 0, goodForDays = 5) {
    this.quality = quality;
    this.expiryDate = moment(this.arrivedDate)
      .add(this.goodForDays, "days")
      .format("YYYY:MM:DD");
    this.arrivedDate = moment().format("YYYY:MM:DD");
    this.goodForDays = goodForDays
  }
}
