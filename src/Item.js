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

  calculateQuality(inventoryCurrentDate) {
    const currentDate = moment(inventoryCurrentDate);
    const expiryDate = moment(this.expiryDate);

    const differenceInDays = expiryDate.diff(currentDate, "days");
    if (differenceInDays < 10 && differenceInDays >= 5) {
      this.quality += 2;
    }
    if (differenceInDays < 5 && differenceInDays >= 1) {
      this.quality += 3;
    }

    if (differenceInDays <= 0) {
      this.quality = 0;
    }
  }
}


