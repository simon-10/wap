class Savingsaccount extends Account{
    constructor(number){
        super(number);
        this._interest=5.0;
    }

    getInterest(){
        return this._interest;
    }
    
    setInterest(interest){
        this._interest=interest;
    }

    addInterest(){
        this.deposit(this.getBalance() * this._interest / 100);
    }
    

    endOfMonth() {
        //let addedInterest=this.getBalance * this._interest / 100;
        //this.addInterest()
        alert("inside");
        return "Interest added SavingsAccount:"+ this.number +" balance: "+ this.getBalance +"interest:"+ this.getBalance * this._interest / 100;
        
    }

    toString() {
        alert("tostring");
        return "Account " + this._number + ": interest " + this.interest;
    }

}