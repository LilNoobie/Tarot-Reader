//make the logs pause when running function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const readTarot = () => {
    //the whole deck
    let cards = ["The Fool", 
    "The Magician", 
    "The High Priestess", 
    "The Empress", 
    "The Emperor", 
    "The Hierophant", 
    "The Lovers", 
    "The Chariot", 
    "Strength", 
    "The Hermit", 
    "Wheel of Fortune", 
    "Justice", 
    "The Hanged Man", 
    "Death", 
    "Temperance", 
    "The Devil", 
    "The Tower", 
    "The Star", 
    "The Moon", 
    "The Sun", 
    "Judgement", 
    "The World"];

    //choose three unique cards
    let randNum = [];
    while(randNum.length < 3){
        let r = Math.floor(Math.random() * cards.length);
        if(randNum.indexOf(r) === -1) randNum.push(r);
    };

    //upright or reversed
    let orientation = ["(upright)", "(reversed)"];

    //array of orientation
    let randOrientation = [];
    while(randOrientation.length < 3){
        let o = Math.floor(Math.random() * orientation.length);
        randOrientation.push(o);
    };

    //return prediction
    console.log('Well, hello there.')
    sleep(2000)
        .then(() => console.log('I see you have come to get some insight...'))
        .then(() => sleep(2000))
        .then(() => console.log('Let me examine your aura.'))
        .then(() => sleep(2000))
        .then(() => console.log('I see...'))
        .then(() => sleep(2000))
        .then(() => console.log('Here is what I have for you today:'))
        .then(() => sleep(2000))
        .then(() => console.log(`Your first card: ${cards[randNum[0]]} ${orientation[randOrientation[0]]}`))
        .then(() => sleep(2000))
        .then(() => console.log(`Your second card: ${cards[randNum[1]]} ${orientation[randOrientation[1]]}`))
        .then(() => sleep(2000))
        .then(() => console.log(`Your third card: ${cards[randNum[2]]} ${orientation[randOrientation[2]]}`))
        .then(() => sleep(2000))
        .then(() => console.log(`Read about what your cards mean: https://www.tarot.com/tarot/cards`))
};

readTarot();