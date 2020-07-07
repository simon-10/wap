class Bank{
    constructor(){
        this.account=[];
        this.nextNumber=1;
    }
    



    addAccount(){
        this.account.push(new Account(this.nextNumber));
        return this.nextNumber++;
    } 

    addSavingsAccount(interest){
        this.account.push((new Savingsaccount(this.nextNumber).setInterest(interest)));
        return this.nextNumber++;

    }

    addCheckingAccount(overdraft) {
        this.account.push((new CheckingAccount(this.nextNumber)).setOverdraft(overdraft));
        return this.nextNumber++;

    }

    closeAccount(number){
      //  this.account.splice(number, 1);
      // could have used splice but it will remove the index and will affect change of account number of all subsequent accounts
        delete this.account[number];
      
        return number;
    }

    accountReport(){
        for(let i=1; i<nextNumber;i++){
            console.log(this.account[i].toString());
        }
    }

    endOfMonth(){
        this.account.forEach((acc)=>console.log(this.acc.endOfMonth()));
                  
    }
}





