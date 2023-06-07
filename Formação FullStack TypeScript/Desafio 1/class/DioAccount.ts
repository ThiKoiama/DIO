export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (money: number): void => {
    if (this.validateStatus()) {
      this.balance = money;
      console.log("Voce depositou");
    }
  };

  withdraw = (money: number): void => {
    if (this.validateStatus() && money <= this.balance) {
      this.balance = this.balance - money;
      console.log("Voce sacou");
    }
  };

  setBalance = (balance: number): void => {
    this.balance = balance;
  };

  getBalance = (): number => {
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
