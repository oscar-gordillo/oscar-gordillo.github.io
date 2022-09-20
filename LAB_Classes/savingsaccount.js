class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest=interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(interest){
        this._interest=interest;
    }
    addInterest(){
        super.deposit(super.getBalance() * this._interest / 100);
    }
    toString() {
        return "Account " + this._number + ": balance " + this._balance+ ", interest "+this._interest;
    }
    endOfMonth(){
        this.addInterest();
        return "interest added SavingsAccount "+this._number+": balance: "+this._balance+" interest: "+this._interest;
    }
}
let testSavingAccount = new SavingsAccount(123,2);


