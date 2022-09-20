class Bank{
    constructor(){
        this._accounts = [];
        this._nextNumber = 0;
    }
    addAccount(){
        this._accounts[this._nextNumber]=new Account(this._nextNumber);        
        this._nextNumber++;
    }
    addSavingsAccount(interest){
        this._accounts[this._nextNumber]=new SavingsAccount(this._nextNumber,interest);  
        this._nextNumber++;
    }
    addCheckingAccount(overdraft){
        this._accounts[this._nextNumber]=new CheckingAccount(this._nextNumber,overdraft);  
        this._nextNumber++;
    }
    closeAccount(number){
        this._accounts.splice(number,1);
        this._nextNumber--;
    }
    accountReport(){
        let str=this._accounts.reduce((x,y)=>x+"\n"+y);
        return str;
    }
    getAccounts(){
        return this._accounts;
    }
    endOfMonth(){
        for(let i=0;i<this._accounts.length;i++){
            console.log(this._accounts[i].endOfMonth());
        }
    }
}
let testBank=new Bank();
