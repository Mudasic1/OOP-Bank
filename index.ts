  interface IBankAccount {
    credit(amount: number): void;
    debit(amount: number): void;
    getAccountBalance(): number; // Added method to get account balance
  }
  
  class BankAccount implements IBankAccount {
    private accountBalance: number; // Made accountBalance private
  
    constructor(accountBalance: number) {
      this.accountBalance = accountBalance;
    }
  
    public credit(amount: number) {
      if (amount > 0) {
        this.accountBalance += amount;
        console.log("Credit successful. New account balance: ", this.accountBalance);
      } else {
        console.log("Credit unsuccessful");
      }
    }
  
    public debit(amount: number) {
      if (amount > 0 && amount <= this.accountBalance) {
        this.accountBalance -= amount;
        console.log("Debit successful. New account balance: " + this.accountBalance);
      } else {
        console.log("Debit unsuccessful");
      }
    }
  
    public getAccountBalance(): number {
      return this.accountBalance;
    }
  }
  
  class Customer {
    person: {
      firstname: string;
      lastname: string;
    };
    age: number;
    gender: string;
    mobile_number: number;
    bankaccount: IBankAccount;
  
    constructor(person: { firstname: string; lastname: string }, age: number, gender: string, mobile_number: number, bankaccount: IBankAccount) {
      this.person = person;
      this.age = age;
      this.gender = gender;
      this.mobile_number = mobile_number;
      this.bankaccount = bankaccount;
    }
  
    public display() {
      console.log("Name: " + this.person.firstname + " " + this.person.lastname);
      console.log("Age: " + this.age);
      console.log("Gender: " + this.gender);
      console.log("Mobile Number: " + this.mobile_number);
      console.log("Amount in bank: " + this.bankaccount.getAccountBalance());
    }
  }
  
  const al = new BankAccount(888);
  const c1 = new Customer({ firstname: "Mudasir", lastname: "Chandio" }, 27, "Male", 3478291004, al);
  
  c1.display();
  c1.bankaccount.debit(500);
  
  console.log();
  
  const a2 = new BankAccount(500);
  const c2 = new Customer({ firstname: "Mubashir", lastname: "Chandio" }, 25, "male", 31598564345896, a2);
  
  c2.display();
  c2.bankaccount.debit(200); // Debit from c2's bank account
  
  console.log();
  