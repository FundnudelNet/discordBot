/*  Module Casino
|   Used to simulate a casino. This Object can be accessed via the MessageHandler.
|   TODO:Add more games to the casino
 */
class Casino {
    //Construct the object
    //Params: bet: The bet the user made
    constructor(bet) {
        this.bet = bet;
        this.userCount = 0;
        this.aiCount = 0;
    }
    //Blackjack command/game.
    //Returns: the prize
    blackjack(){
        //Function Gamble. Draws cards.
        //Returns: the value of the cards
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

        //Winning control. Calculates the prize and handles it to the winHandler
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

    /*  WinHandler, this function is called after every won game. It handles the win mechanics
        Params: mode: the name of the casino game
                payOut: the prize
        Returns: The prize
        TODO: Add mongoDB support
     */
    winHandler(mode, payOut){
        switch (mode){
            case "bj":
                return payOut;
        }
    }
}

//Exports the Casino class as a single module
module.exports = Casino;