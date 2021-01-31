class Casino {
    constructor(bet) {
        this.bet = bet;
        this.userCount = 0;
        this.aiCount = 0;
    }

    blackjack(){
        function gamble() {
            const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10", "10", "11"];
            var recentValues = [];
            var card;

            let count = 0
            while(count < 17){
                card = values[Math.floor(Math.random() * values.length)];
                recentValues.push(card);
                count = 0;
                for (var i = 0; i < recentValues.length;i++){
                    count += parseInt(recentValues[i]);
                }

                if (count + card > 21){
                    if (recentValues.includes("11")){
                        recentValues[recentValues.indexOf("11")] = "1";
                        count = 0;
                        for (var i = 0; i < recentValues.length;i++){
                            count += parseInt(recentValues[i]);
                        }
                    }
                }
            }
            return count;
        }

        this.userCount = gamble();
        this.aiCount = gamble();

        if (this.userCount <= 21){
            if (this.userCount >= this.aiCount || this.aiCount > 21){
                let payOut = this.bet;
                if(!(this.userCount === this.aiCount)){
                    if (this.userCount === 21){
                        payOut *= 5;
                    } else {
                        payOut *= 3;
                    }
                    return this.winHandler("bj", payOut);
                }
                return this.winHandler("bj", payOut);
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }
    winHandler(mode, payOut){
        switch (mode){
            case "bj":
                return payOut;
        }
    }
}

module.exports = Casino;