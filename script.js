function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const readTarot = () => {
    //the whole deck
    let cards = ["The Fool (Upright)", 
        "The Magician (Upright)", 
        "The High Priestess (Upright)", 
        "The Empress (Upright)", 
        "The Emperor (Upright)", 
        "The Hierophant (Upright)", 
        "The Lovers (Upright)", 
        "The Chariot (Upright)", 
        "Strength (Upright)", 
        "The Hermit (Upright)", 
        "Wheel of Fortune (Upright)", 
        "Justice (Upright)", 
        "The Hanged Man (Upright)", 
        "Death (Upright)", 
        "Temperance (Upright)", 
        "The Devil (Upright)", 
        "The Tower (Upright)", 
        "The Star (Upright)", 
        "The Moon (Upright)", 
        "The Sun (Upright)", 
        "Judgement (Upright)", 
        "The World (Upright)", 
        "The Fool (Reversed)", 
        "The Magician (Reversed)", 
        "The High Priestess (Reversed)", 
        "The Empress (Reversed)", 
        "The Emperor (Reversed)", 
        "The Hierophant (Reversed)", 
        "The Lovers (Reversed)", 
        "The Chariot (Reversed)", 
        "Strength (Reversed)", 
        "The Hermit (Reversed)", 
        "Wheel of Fortune (Reversed)", 
        "Justice (Reversed)", 
        "The Hanged Man (Reversed)", 
        "Death (Reversed)", 
        "Temperance (Reversed)", 
        "The Devil (Reversed)", 
        "The Tower (Reversed)", 
        "The Star (Reversed)", 
        "The Moon (Reversed)", 
        "The Sun (Reversed)", 
        "Judgement (Reversed)", 
        "The World (Reversed)"]

    //choose three unique cards
    let randNum = [];
    while(randNum.length < 3){
        let r = Math.floor(Math.random() * cards.length) + 1;
        if(randNum.indexOf(r) === -1) randNum.push(r);
    };

    //match the three random numbers to the deck
    let cardOne = cards[randNum[0]];
    let cardTwo = cards[randNum[1]];
    let cardThree = cards[randNum[2]];

    //return prediction
    console.log('Hello')
    sleep(2000)
        .then(() => console.log('I see you have come to get some insight...'))
        .then(() => sleep(2000))
        .then(() => console.log('Let me examine your aura.'))
        .then(() => sleep(2000))
        .then(() => console.log('I see...'))
        .then(() => sleep(2000))
        .then(() => console.log('Here is what I have for you today:'))
        .then(() => sleep(2000))
        .then(() => console.log(`Your first card: ${cardOne}`))
        .then(() => sleep(2000))
        .then(() => console.log(`Your second card: ${cardTwo}`))
        .then(() => sleep(2000))
        .then(() => console.log(`Your third card: ${cardThree}`))
        .then(() => sleep(2000))
        .then(() => console.log(`Read about what your cards mean: https://www.tarot.com/tarot/cards`))
};

readTarot();