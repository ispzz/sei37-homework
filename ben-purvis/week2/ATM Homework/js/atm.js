const accounts = {
    checking : {
        name : "checking",
        total : 200,
        setTotal : function(total){
            this.total = total;
        },
        getTotal : function(){
            return this.total;
        },
        isEmpty : function(){
            return this.total === 0 || this.total < 0;
        }
    },
    savings : {
        name : "savings",
        total : 150,
        setTotal : function(total){
            this.total = total;
        },
        getTotal : function(){
            return this.total;
        },
        isEmpty : function(){
            return this.total === 0 || this.total < 0;
        }
    }
}


const bank = {
    userAccountTotal : function(){
        let total = 0 
        for (let key in accounts){       
            total += accounts[key].getTotal();
        }
        return total;
    },
    /*
        Account gets overdrafted if the other accounts total is below
        zero. Gets the negative number from the overdraft and makes it a
        positive number then sets the opposite accounts total to be
        oppositeAccount.total - overdraft.
     */
    overdraft : function(accountName, withdrawAmount){
        if(withdrawAmount > this.userAccountTotal()){
            return;
        }
        let currentAccount;
        let oppositeAccount;
        currentAccount = accounts[accountName];
        console.log(currentAccount.getTotal())
        const overdraftAmount = Math.abs(currentAccount.getTotal() - withdrawAmount);   
        currentAccount.setTotal(0)
        if(currentAccount.isEmpty()){
            oppositeAccount = accounts[this.balanceCheck()]
            console.log(oppositeAccount)
            oppositeAccount.setTotal(oppositeAccount.getTotal() - overdraftAmount)
        }   
    },
    deposit : function(accountName, depositAmount){
        if (accounts[accountName] !== undefined){
            let currentAccount = accounts[accountName];
            currentAccount.setTotal(currentAccount.getTotal() + depositAmount);
        }
    },
    withdraw : function(accountName, withdrawAmount){  
        if (accountName.toLowerCase() === accounts[accountName].name){              
            let currentAccount = accounts[accountName.toLowerCase()];
            const withdrawTotal = currentAccount.getTotal() - withdrawAmount;
            if(withdrawTotal < 0){
                this.overdraft(accountName, withdrawAmount);
            }else{
                currentAccount.setTotal(withdrawTotal);
            } 
        }
    },
    emptyCheck : function(){
        if(accounts.savings.isEmpty()){
            return "savings"
        }else if(accounts.checking.isEmpty()){
            return "checking"
        }
        return "none"     
    },
    balanceCheck : function(){
        if(!accounts.savings.isEmpty()){
            return "savings"
        }else if(!accounts.checking.isEmpty()){
            return "checking"
        }
        return "none"     
    }
}

$(document).ready(function(){
    let checkingElement = $("#balance1");
    let savingsElement = $("#balance2");
    let checkingValue;
    let savingsValue = "";

    $("#savingsDeposit").on("click", function(e){
        savingsValue = $("#savingsAmount").eq(0).val();
        if(savingsValue !== "" && !isNaN(savingsValue)){
            bank.deposit("savings", parseFloat(savingsValue));
            savingsElement.html("$" + accounts.savings.getTotal());
        }
        colorSwitcher(accounts.savings, savingsElement);
    })
    $("#savingsWithdraw").on("click", function(){
        savingsValue = $("#savingsAmount").eq(0).val();
        if(savingsValue !== "" && !isNaN(savingsValue)){
            bank.withdraw("savings", parseFloat(savingsValue));
            savingsElement.html("$" + accounts.savings.getTotal());
            checkingElement.html("$" + accounts.checking.getTotal());
        }
        colorSwitcher(accounts.savings, savingsElement);
        colorSwitcher(accounts.checking, checkingElement);
    })
    $("#checkingDeposit").on("click", function(){
        checkingValue = $("#checkingAmount").eq(0).val();
        if(checkingValue !== "" && !isNaN(checkingValue)){
            bank.deposit("checking", parseFloat(checkingValue));
            checkingElement.html("$" + accounts.checking.getTotal())
        }
        colorSwitcher(accounts.checking, checkingElement);
    })
    $("#checkingWithdraw").on("click", function(){
        checkingValue = $("#checkingAmount").eq(0).val()
        if(checkingValue !== "" && !isNaN(checkingValue)){
            bank.withdraw("checking", parseFloat(checkingValue));
            checkingElement.html("$" + accounts.checking.getTotal())
            savingsElement.html("$" + accounts.savings.getTotal())
        }
        colorSwitcher(accounts.checking, checkingElement);
        colorSwitcher(accounts.savings, savingsElement);
    })
    checkingElement.html("$" + accounts.checking.getTotal())
    savingsElement.html("$" + accounts.savings.getTotal())
    console.log(bank.userAccountTotal())

    function colorSwitcher(account, element){
        if(account.isEmpty()){
            element.css("background", "red");
        }else{
            element.css("background", "white");
        }
    }
})


