import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (money: number): void => {
    if (this.validateStatus()) {
      let balance = this.getBalance();
      balance = balance + money;
      console.log("Voce pegou um empréstimo");
      this.setBalance(balance);
    }
  };
}
