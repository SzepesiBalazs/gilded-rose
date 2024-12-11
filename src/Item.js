import moment from "moment";

export default class Item {
  constructor(quality = 0, goodForDays = 5, rarity = null) {
    this.quality = quality;
    this.goodForDays = goodForDays;
    this.rarity = rarity;
    this.expiryDate = moment(this.arrivedDate)
      .add(this.goodForDays, "days")
      .format("YYYY-MM-DD");
    this.arrivedDate = moment().format("YYYY-MM-DD");
  }
}
