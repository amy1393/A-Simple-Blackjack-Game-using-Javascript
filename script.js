// function days() {
// var birthyear = prompt('Enter your birthyear');
// var ageindays = (2020-birthyear)*365;
// var textanswer = document.createTextNode('You are ' + ageindays + ' days old.')
// var h1 = document.createElement('h1');
// h1.setAttribute('id', 'ageindays');
// h1.append(textanswer);
// document.getElementById('flexbox-result').appendChild(h1);
// }

// function reset() {
//     document.getElementById('ageindays').remove();
// }

// //Challenge 2: Rock, Paper, Scissors
// function rpsGame(yourchoice) {
//     var humanchoice, botchoice;
//     humanchoice = yourchoice.id;
//     botchoice = arraychoice(rpsInteger());
//     console.log('computer:',botchoice);
//     result = rpsWinner(humanchoice, botchoice); // [0,1] human lost | bot wins
//     console.log(result);
//     message = finalMessage(result); //{message: 'You lost', color: 'red'}
//     console.log(message);
//     rpsFrontEnd(humanchoice,botchoice,message);

// }

// function rpsInteger() {
//     return Math.floor(Math.random()*3);
// }

// function arraychoice(number) {
//     return ['rock','paper','scissors'][number];
// }

// function rpsWinner(yourchoice,computerchoice) {
//     var rpsDatabase = {
//         'rock': {'scissors': 1,'rock': 0.5,'paper': 0},
//         'paper': {'rock': 1,'paper': 0.5,'scissors': 0},
//         'scissors': {'paper': 1,'scissors': 0.5,'rock': 0},
//     };
//     var yourScore = rpsDatabase[yourchoice][computerchoice];
//     var botScore = rpsDatabase[computerchoice][yourchoice];

//     return [yourScore, botScore];
// }

// function finalMessage([yourScore, botScore]) {
//     if (yourScore === 0) {
//         return {'message': 'You Lost', 'color': 'red'};
//     }
//     else if (yourScore === 0.5) {
//         return {'message': 'You Tied', 'color': 'yellow'};
//     }
//     else{
//         return {'message': 'You Won', 'color': 'green'};
//     }
// }

// function rpsFrontEnd(humanimagechoice, botimagechoice, finalMessage) {
//     var imageDatabase = {
//         'rock': document.getElementById('rock').src,
//         'paper': document.getElementById('paper').src,
//         'scissors': document.getElementById('scissors').src,
//     };

//     document.getElementById('rock').remove();
//     document.getElementById('paper').remove();
//     document.getElementById('scissors').remove();

//     var humandiv = document.createElement('div');
//     var messagediv = document.createElement('div');
//     var botdiv = document.createElement('div');

//     humandiv.innerHTML = "<img src='" + imageDatabase[humanimagechoice] + "' height=150 width=180 style='box-shadow: 1px 2px 13px 2px rgba(245,74,12,1);'>" 

//     messagediv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

//     botdiv.innerHTML = "<img src='" + imageDatabase[botimagechoice] + "' height=150 width=150 style ='box-shadow: 1px 2px 13px 2px rgba(12,59,245,1);'>"

//     document.getElementById('flex-box-rps-div').appendChild(humandiv);
//     document.getElementById('flex-box-rps-div').appendChild(messagediv);
//     document.getElementById('flex-box-rps-div').appendChild(botdiv);

//     // var humandiv = document.createElement('div');
//     // var messagediv = document.createElement('div');
//     // var botdiv = document.createElement('div');

//     // humandiv.innerHTML = imageDatabase[humanimagechoice];
//     // botdiv.innerHTML = imageDatabase[botimagechoice];

//     // document.getElementById('flex-box-rps-div').appendChild(humandiv);

//     // document.getElementById('flex-box-rps-div').appendChild(botdiv);
// }

// // Callenge 3: Change the Color of All Buttons!

// var all_buttons = document.getElementsByTagName('button');
//  let copy_class = [];

//  for(let i=0; i<all_buttons.length; i++) {
//      copy_class.push(all_buttons[i].classList[1]);
//  }

// function buttonchangeColor(buttonthingy){
//     if(buttonthingy.value === 'red'){
//          buttonRed();
//     }
//     else if(buttonthingy.value === 'green'){
//         buttonGreen();
//     }
//     else if(buttonthingy.value === 'reset'){
//         buttonReset();
//     }
//     else if(buttonthingy.value === 'random'){
//         buttonRandom();
//     }
// }


// function buttonRed(){
//     for(let i = 0; i<all_buttons.length; i++){
//         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//         all_buttons[i].classList.add('btn-danger');
//     }
// }

// function buttonGreen(){
//     for(let i = 0; i<all_buttons.length; i++){
//         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//         all_buttons[i].classList.add('btn-success');
//     }
// }

// function buttonReset(){
//     for(let i=0; i<all_buttons.length; i++){
//         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//         all_buttons[i].classList.add(copy_class[i]);
//     }
// }

// function buttonRandom(){
//     let randomarray = ['btn-danger','btn-primary','btn-warning','btn-success'];
    
//     for(let i=0; i<all_buttons.length; i++){
//         let random_number = Math.floor(Math.random()*4);
        
//         all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//         all_buttons[i].classList.add(randomarray[random_number]);
//     }
// }

// // Challenge 4: Blackjack
// let blackjackGame = {
//     'you': {'spanscore': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
//     'dealer':{'spanscore': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
//     'cards': ['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
//     'cardsMap': {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'A':[1,11], 'J':10, 'K':10, 'Q':10},
//     'wins': 0,
//     'loses': 0,
//     'draws': 0,

// };

// const You = blackjackGame['you'];
// const Dealer= blackjackGame['dealer'];
// const place = new Audio('static/sounds/swish.m4a');
// const winSound = new Audio('static/sounds/cash.mp3');
// const lossSound = new Audio('static/sounds/aww.mp3');

// document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
// document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
// document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

// function blackjackHit() {
//     let card = randomCard();
//     console.log(card);
//     showCard(card,You);
//     updateScore(card,You);
//     console.log(You['score']);
//     showScore(You);
// }

// function showCard(card,active_player) {
//     if(active_player['score'] <=21){
//     let cardImage = document.createElement('img');
//     cardImage.src = `static/Assets/Images/${card}.png`;
//     document.querySelector(active_player['div']).appendChild(cardImage);
//     place.play();
//     }
// }

// function randomCard() {
//     let randomIndex = Math.floor(Math.random()*13);
//     return blackjackGame['cards'][randomIndex];
//   }
  
// function blackjackDeal() {
//     let remove_Your_Card_Image = document.querySelector('#your-box').querySelectorAll('img');
//     let remove_Bot_Card_Image = document.querySelector('#dealer-box').querySelectorAll('img');
   
//     for(let i=0; i<remove_Your_Card_Image.length; i++) {
//         remove_Your_Card_Image[i].remove();
//     }

//     for(let i=0; i<remove_Bot_Card_Image.length;i++) {
//         remove_Bot_Card_Image[i].remove();
//     }
//     You['score'] = 0;
//     Dealer['score'] = 0;
//     document.querySelector('#your-blackjack-result').textContent = '0';
//     document.querySelector('#dealer-blackjack-result').textContent = '0';
//     document.querySelector('#your-blackjack-result').style.color = 'white';
//     document.querySelector('#dealer-blackjack-result').style.color = 'white';

//     document.querySelector('#blackjack-result').textContent = "Let's Play";
//     document.querySelector('#blackjack-result').style.color = 'black';
// }

// function updateScore(card,active_player){
//     if(card==='A') {
//         if(active_player['score'] + blackjackGame['cardsMap'][card][1]<=21){
//             active_player['score'] += blackjackGame['cardsMap'][card][1];
//         }else{
//             active_player['score'] += blackjackGame['cardsMap'][card][0];
//         }
//     }else{
//         active_player['score'] += blackjackGame['cardsMap'][card];
//     }

// }

// function showScore(active_player){
//     if(active_player['score'] <=21){
//     document.querySelector(active_player['spanscore']).textContent = active_player['score'];
//     }else{
//         document.querySelector(active_player['spanscore']).textContent = 'BUSTED!';
//         document.querySelector(active_player['spanscore']).style.color = 'red';
//     }
// }


// function dealerLogic(){
//     let card = randomCard();
//     console.log(card);
//     showCard(card,Dealer);
//     updateScore(card,Dealer);
//     console.log(Dealer['score']);
//     showScore(Dealer);

//     if(Dealer['score'] > 16){
//         showResult(computeWinner());
//     }

// }

// function computeWinner() {
//     let winner;
//     if(You['score']<=21){
//         if(You['score']>Dealer['score']||Dealer['score']>21){
//             console.log('You Won!');
//             blackjackGame['wins']++;
//             winner = You;
//         }else if(You['score']<Dealer['score']){
//             console.log('You Lost!');
//             blackjackGame['loses']++;
//             winner = Dealer;
//         }else if(You['score']===Dealer['score']){
//             console.log('You Drew!');
//             blackjackGame['draws']++;
//         }
//     }else if(You['score']>21&&Dealer['score']<=21){
//         console.log('You Lost!');
//         blackjackGame['loses']++;
//         winner = Dealer;
//     }else if(You['score']>21&&Dealer['score']>21){
//         console.log('You Drew!');
//         blackjackGame['draws']++;
//     }
//     console.log('Winner is', winner);
//     return winner;

// }

// function showResult(winner){
//     let message, messageColor;
//     if(winner===You){
//         document.querySelector('#wins').textContent = blackjackGame['wins'];
//         message = 'You Won!';
//         messageColor = 'green';
//         winSound.play();
//     }else if(winner===Dealer){
//         document.querySelector('#loses').textContent = blackjackGame['loses'];
//         message = 'You Lost!';
//         messageColor = 'red';
//         lossSound.play();
//     }else{
//         document.querySelector('#draws').textContent = blackjackGame['draws'];
//         message = 'You Drew!';
//         messageColor = 'purple';
//     }

//     document.querySelector('#blackjack-result').textContent = message;
//     document.querySelector('#blackjack-result').style.color = messageColor;
// }


//repl

function days() {
    var birthyear = prompt('Enter your birthyear');
    var ageindays = (2020-birthyear)*365;
    var textanswer = document.createTextNode('You are ' + ageindays + ' days old.')
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageindays');
    h1.append(textanswer);
    document.getElementById('flexbox-result').appendChild(h1);
    }
    
    function reset() {
        document.getElementById('ageindays').remove();
    }
    
    //Challenge 2: Rock, Paper, Scissors
    function rpsGame(yourchoice) {
        var humanchoice, botchoice;
        humanchoice = yourchoice.id;
        botchoice = arraychoice(rpsInteger());
        console.log('computer:',botchoice);
        result = rpsWinner(humanchoice, botchoice); // [0,1] human lost | bot wins
        console.log(result);
        message = finalMessage(result); //{message: 'You lost', color: 'red'}
        console.log(message);
        rpsFrontEnd(humanchoice,botchoice,message);
    
    }
    
    function rpsInteger() {
        return Math.floor(Math.random()*3);
    }
    
    function arraychoice(number) {
        return ['rock','paper','scissors'][number];
    }
    
    function rpsWinner(yourchoice,computerchoice) {
        var rpsDatabase = {
            'rock': {'scissors': 1,'rock': 0.5,'paper': 0},
            'paper': {'rock': 1,'paper': 0.5,'scissors': 0},
            'scissors': {'paper': 1,'scissors': 0.5,'rock': 0},
        };
        var yourScore = rpsDatabase[yourchoice][computerchoice];
        var botScore = rpsDatabase[computerchoice][yourchoice];
    
        return [yourScore, botScore];
    }
    
    function finalMessage([yourScore, botScore]) {
        if (yourScore === 0) {
            return {'message': 'You Lost', 'color': 'red'};
        }
        else if (yourScore === 0.5) {
            return {'message': 'You Tied', 'color': 'yellow'};
        }
        else{
            return {'message': 'You Won', 'color': 'green'};
        }
    }
    
    function rpsFrontEnd(humanimagechoice, botimagechoice, finalMessage) {
        var imageDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src,
        };
    
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();
    
        var humandiv = document.createElement('div');
        var messagediv = document.createElement('div');
        var botdiv = document.createElement('div');
    
        humandiv.innerHTML = "<img src='" + imageDatabase[humanimagechoice] + "' height=150 width=180 style='box-shadow: 1px 2px 13px 2px rgba(245,74,12,1);'>" 
    
        messagediv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    
        botdiv.innerHTML = "<img src='" + imageDatabase[botimagechoice] + "' height=150 width=150 style ='box-shadow: 1px 2px 13px 2px rgba(12,59,245,1);'>"
    
        document.getElementById('flex-box-rps-div').appendChild(humandiv);
        document.getElementById('flex-box-rps-div').appendChild(messagediv);
        document.getElementById('flex-box-rps-div').appendChild(botdiv);
    
        // var humandiv = document.createElement('div');
        // var messagediv = document.createElement('div');
        // var botdiv = document.createElement('div');
    
        // humandiv.innerHTML = imageDatabase[humanimagechoice];
        // botdiv.innerHTML = imageDatabase[botimagechoice];
    
        // document.getElementById('flex-box-rps-div').appendChild(humandiv);
    
        // document.getElementById('flex-box-rps-div').appendChild(botdiv);
    }
    
    // Callenge 3: Change the Color of All Buttons!
    
    var all_buttons = document.getElementsByTagName('button');
     let copy_class = [];
    
     for(let i=0; i<all_buttons.length; i++) {
         copy_class.push(all_buttons[i].classList[1]);
     }
    
    function buttonchangeColor(buttonthingy){
        if(buttonthingy.value === 'red'){
             buttonRed();
        }
        else if(buttonthingy.value === 'green'){
            buttonGreen();
        }
        else if(buttonthingy.value === 'reset'){
            buttonReset();
        }
        else if(buttonthingy.value === 'random'){
            buttonRandom();
        }
    }
    
    
    function buttonRed(){
        for(let i = 0; i<all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
    }
    
    function buttonGreen(){
        for(let i = 0; i<all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
        }
    }
    
    function buttonReset(){
        for(let i=0; i<all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copy_class[i]);
        }
    }
    
    function buttonRandom(){
        let randomarray = ['btn-danger','btn-primary','btn-warning','btn-success'];
        
        for(let i=0; i<all_buttons.length; i++){
            let random_number = Math.floor(Math.random()*4);
            
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(randomarray[random_number]);
        }
    }
    
    // Challenge 4: Blackjack
    let blackjackGame = {
        'you': {'spanscore': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
        'dealer':{'spanscore': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
        'cards': ['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
        'cardsMap': {'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'A':[1,11], 'J':10, 'K':10, 'Q':10},
        'wins': 0,
        'loses': 0,
        'draws': 0,
        'isStand': false,
        'turnover': false,
    
    };
    
    const You = blackjackGame['you'];
    const Dealer= blackjackGame['dealer'];
    const place = new Audio('static/sounds/swish.m4a');
    const winSound = new Audio('static/sounds/cash.mp3');
    const lossSound = new Audio('static/sounds/aww.mp3');
    
    document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
    document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
    document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
    
    function blackjackHit() {
      if(blackjackGame['isStand'] === false){
        let card = randomCard();
        console.log(card);
        showCard(card,You);
        updateScore(card,You);
        console.log(You['score']);
        showScore(You);
    }
    }
    
    function showCard(card,active_player) {
        if(active_player['score'] <=21){
        let cardImage = document.createElement('img');
        cardImage.src = `static/Assets/Images/${card}.png`;
        document.querySelector(active_player['div']).appendChild(cardImage);
        place.play();
        }
    }
    
    function randomCard() {
        let randomIndex = Math.floor(Math.random()*13);
        return blackjackGame['cards'][randomIndex];
      }
      
    function blackjackDeal() {
      if(blackjackGame['turnover']===true){
        blackjackGame['isStand'] = false;
        
        let remove_Your_Card_Image = document.querySelector('#your-box').querySelectorAll('img');
        let remove_Bot_Card_Image = document.querySelector('#dealer-box').querySelectorAll('img');
       
        for(let i=0; i<remove_Your_Card_Image.length; i++) {
            remove_Your_Card_Image[i].remove();
        }
    
        for(let i=0; i<remove_Bot_Card_Image.length;i++) {
            remove_Bot_Card_Image[i].remove();
        }
        You['score'] = 0;
        Dealer['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = '0';
        document.querySelector('#dealer-blackjack-result').textContent = '0';
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
    
        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';
        blackjackGame['turnover'] = false;
    }
    }
    
    function updateScore(card,active_player){
        if(card==='A') {
            if(active_player['score'] + blackjackGame['cardsMap'][card][1]<=21){
                active_player['score'] += blackjackGame['cardsMap'][card][1];
            }else{
                active_player['score'] += blackjackGame['cardsMap'][card][0];
            }
        }else{
            active_player['score'] += blackjackGame['cardsMap'][card];
        }
    
    }
    
    function showScore(active_player){
        if(active_player['score'] <=21){
        document.querySelector(active_player['spanscore']).textContent = active_player['score'];
        }else{
            document.querySelector(active_player['spanscore']).textContent = 'BUSTED!';
            document.querySelector(active_player['spanscore']).style.color = 'red';
        }
    }

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve,ms));
    }
        
    async function dealerLogic(){
        blackjackGame['isStand'] = true;
        while(Dealer['score']<17 && blackjackGame['isStand']===true) {
            let card = randomCard();
            console.log(card);
            showCard(card,Dealer);
            updateScore(card,Dealer);
            console.log(Dealer['score']);
            showScore(Dealer);
            await sleep(1000);
        };
    
        blackjackGame['turnover'] = true;
        showResult(computeWinner());
    
    }
    
    function computeWinner() {
        let winner;
        if(You['score']<=21){
            if(You['score']>Dealer['score']||Dealer['score']>21){
                console.log('You Won!');
                blackjackGame['wins']++;
                winner = You;
            }else if(You['score']<Dealer['score']){
                console.log('You Lost!');
                blackjackGame['loses']++;
                winner = Dealer;
            }else if(You['score']===Dealer['score']){
                console.log('You Drew!');
                blackjackGame['draws']++;
            }
        }else if(You['score']>21&&Dealer['score']<=21){
            console.log('You Lost!');
            blackjackGame['loses']++;
            winner = Dealer;
        }else if(You['score']>21&&Dealer['score']>21){
            console.log('You Drew!');
            blackjackGame['draws']++;
        }
        console.log('Winner is', winner);
        return winner;
    
    }
    
    function showResult(winner){
      if(blackjackGame['turnover']===true){
        let message, messageColor;
        if(winner===You){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();
        }else if(winner===Dealer){
            document.querySelector('#loses').textContent = blackjackGame['loses'];
            message = 'You Lost!';
            messageColor = 'red';
            lossSound.play();
        }else{
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You Drew!';
            messageColor = 'purple';
        }
    
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
    }