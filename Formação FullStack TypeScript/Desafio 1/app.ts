import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SpecialAccount } from "./class/SpecialAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(60);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(100);
console.log(companyAccount);
companyAccount.getLoan(50);
console.log(companyAccount);
companyAccount.withdraw(100);
console.log(companyAccount);
const specialAccount: SpecialAccount = new SpecialAccount("Teste", 10);
specialAccount.deposit(50);
console.log(specialAccount);
