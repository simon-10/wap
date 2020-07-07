


describe("Account methods testing", function(){
    var acc=new Account(1);
    var saving=new Savingsaccount(2);
    var checking=new CheckingAccount(3);
    var bank=new Bank();
   
    
   
    it("We should get 100 when we invoke getNumber method", function(){
        assert.equal(100, new Account(100).getNumber());
    });

    it("Testing deposit ", function(){
        acc.deposit(300);
        assert.equal(300, acc.getBalance());
        
    });

    it("Testing withdraw, withdraw 100 from 300 balance and expected balance is 200 ", function(){
        acc.withdraw(100);
        assert.equal(200, acc.getBalance());
        
    });
    it("Testing getInterest of SavingAccount", function(){
        assert.equal(5, saving.getInterest());
    });

    // it("Testing setInterest of SavingAccount", function(){
    //     saving.setInterest(6);
    //     assert.equal(6, saving.getInterest());
    // });

    it("Testing addInterest of SavingAccount", function(){
        saving.deposit(250);
        saving.addInterest();

        assert.equal(262.5, saving.getBalance());
    });


    it("Testing getOverdraft of CheckingAccount", function(){
        
        assert.equal(500, checking.getOverdraft());
    });

    it("Testing setOverdraft of CheckingAccount", function(){
        checking.setOverdraft(750);
        
        assert.equal(750, checking.getOverdraft());
    });

    it("Testing addAccount of Bank", function(){
               
        assert.equal(1, bank.addAccount());
    });

    it("Testing addSavingsAccount of Bank", function(){
               
        assert.equal(2, bank.addSavingsAccount(6));
    });

    it("Testing addCheckingAccount of Bank", function(){
               
        assert.equal(3, bank.addCheckingAccount(650));
    });

    it("Testing closeAccount of Bank", function(){
               
        assert.equal(2, bank.closeAccount(2));
    });

    

    
});