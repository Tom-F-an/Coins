const toonie = {
    coinName: 'toonie',
    coinMultiple: 'toonies',
    coinValue: 2
  };
  const loonie = {
    coinName: 'loonie',
    coinMultiple: 'loonies',
    coinValue: 1
  };
  const quarter = {
    coinName: 'quarter',
    coinMultiple: 'quarters',
    coinValue: 0.25
  };
  const dime = {
    coinName: 'dime',
    coinMultiple: 'dimes',
    coinValue: 0.1
  };
  const nickel = {
    coinName: 'nickel',
    coinMultiple: 'nickels',
    coinValue: 0.05
  };
  const coins = [toonie, loonie, quarter, dime, nickel];


  function change(amount) {
    let totalCoins = 0; //Sum total of coins needed to give amount work of change
    let numberOfCoin = 0; //number of specific type of [coin] in array 'coins', e.g 2 toonies, 4 loonies, etc.
    let consoleMessage = ''; //message regarding the composition of the change that will be output to console.
    amount = (Math.round((amount * 100)/5) * 5) / 100;

    if(amount == 0){
      consoleMessage += 'You don\'t need to dispense change.';
    } else{
      consoleMessage += 'You need to dispense '
      coins.forEach((coin) => {
        while(amount >= coin.coinValue){
          amount = (amount - coin.coinValue).toFixed(2);
          totalCoins += 1;
          numberOfCoin += 1;
        } //Following if-else block needs optimization. Do that if you have time.
        if(amount == 0){
          if(numberOfCoin == totalCoins){ //find if there are multiple types of coins given out
            switch(numberOfCoin){ //based on whether there are multiple of the coin
              case 0:
                break;
              case 1:
                consoleMessage += `${numberOfCoin} ${coin.coinName}`;
                break;
              default:
                consoleMessage += `${numberOfCoin} ${coin.coinMultiple}`;
                break;
          }
          }else{
            switch(numberOfCoin){
              case 0:
                break;
              case 1:
                consoleMessage += `and ${numberOfCoin} ${coin.coinName}.`;
                break;
              default:
                consoleMessage += `and ${numberOfCoin} ${coin.coinMultiple}`;
                break;
            }
        }
        }else{
          switch(numberOfCoin){
            case 0:
              break;
            case 1:
              consoleMessage += `${numberOfCoin} ${coin.coinName}, `;
              break;
            default:
              consoleMessage += `${numberOfCoin} ${coin.coinMultiple}, `;
              break;
          }
        }
        numberOfCoin = 0;
      });
    }
    console.log(consoleMessage);
    console.log(`Total coins: ${totalCoins}`);
    return totalCoins, consoleMessage;
  }
  // Export the module
  module.exports = change;

