describe("Testing account", function () {
    
    it("Adding 100", function () {
        testAccount.deposit(100);
        assert.equal(testAccount.getBalance(),100);
    });

    it("Withdrawing 50", function () {
        testAccount.withdraw(50);
        assert.equal(testAccount.getBalance(),50);
    });

});

describe("Testing savings account", function () {
    
    it("Adding 100", function () {
        testSavingAccount.deposit(100);
        assert.equal(testSavingAccount.getBalance(),100);
    });

    it("Adding interest", function () {        
        testSavingAccount.addInterest();
        assert.equal(testSavingAccount.getBalance(),102);
    });

});

describe("Testing checking account", function () {
    
    it("Adding 100", function () {
        testCheckingAccount.deposit(100);
        assert.equal(testCheckingAccount.getBalance(),100);
    });

    it("withdrawing with overdraft", function () {        
        testCheckingAccount.withdraw(105);
        assert.equal(testCheckingAccount.getBalance(),-5);
    });

});

describe("Testing bank Class", function () {
    
    it("Adding ad closing account", function () {
        testBank.addAccount();
        assert.equal(testBank.getAccounts().length,1);
        testBank.addAccount();
        assert.equal(testBank.getAccounts().length,2);
        testBank.closeAccount(0);
        assert.equal(testBank.getAccounts().length,1);
        let indSavAcc = testBank._nextNumber;
        testBank.addSavingsAccount(5);
        testBank.getAccounts()[indSavAcc].deposit(100);
        testBank.endOfMonth();        

    });

    

});

