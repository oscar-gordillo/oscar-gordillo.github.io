class CheckingAccount extends Account{
    constructor(number,overdraft){
        super(number);
        this._overdraft=overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(overdraft){
        this._overdraft=overdraft;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance+this._overdraft)) {
            throw Error("Insufficient funds including overdraft");
        }
        this._balance -= amount;
    }
    toString() {
        return "Account " + this._number + ": balance " + this._balance+ ", overdraft "+this._overdraft;
    }
    endOfMonth(){
        if(this._balance<0){
            return "Warning, low balance CheckingAccount "+this._number+": balance: "+this._balance+" overdraft limit: "+this._overdraft;
        }else{
            return "";
        }
    }

}

let testCheckingAccount = new CheckingAccount(123,10);
