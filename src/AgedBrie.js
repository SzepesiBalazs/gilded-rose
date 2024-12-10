import Item from "./Item";

export default class AgedBrie extends Item {
    constructor(quality = 10, goodForDays = 100){
        super(quality, goodForDays)
    }
}
