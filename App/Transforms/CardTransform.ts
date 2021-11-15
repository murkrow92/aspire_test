import BaseTransform from "./BaseTransform";
export default class CardTransform extends BaseTransform {
  fields = {
    id: 1,
    customerId: 1,
    balance: 0,
    balanceLimit: 300,
    limitStatus: false,
    activeStatus: true,
    cardType: "visa",
    cardNumber: "----------------",
    expireMonth: "--",
    expireYear: "--",
    cvv: "---",
    cardHolder: " ",
  };
  constructor(params = {}) {
    super(params);
    this.appendFields(params);
  }
}
