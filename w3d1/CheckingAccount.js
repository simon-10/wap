class CheckingAccount extends Account{
    constructor(number){
        super(number);
        this._overdraft=500;
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

        if (amount > (this.getBalance + this._overdraft)) {
            throw Error("Insufficient funds");
        }
        if (amount > (this.getBalance + this._overdraft)){
        this.withdraw()
        }
      }

      endOfMonth(){
          if(this.getBalance<0){
            return "Warning, low balance CheckingAccount: "+ this.number +"balance: "+ this.getBalance+" overdraft limit:"+this._overdraft;
          }
          else{
              return "";
          }
    }

      toString() {
        return "Account " + this._number + ": overdraft " + this._overdraft;
    }
}