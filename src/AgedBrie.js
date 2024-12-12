import Item from "./Item";
import moment from "moment";

export default class AgedBrie extends Item {
  constructor(quality = 10, goodForDays = 100) {
    super(quality, goodForDays);
  }
}
