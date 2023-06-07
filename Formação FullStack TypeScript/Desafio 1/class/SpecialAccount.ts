import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (money: number): void => {
    let balance = this.getBalance();
    if (this.validateStatus()) {
      balance = money + 10;
      this.setBalance(balance);
      console.log("Voce depositou");
    }
  };
}
