//https://kanye.rest/?ref=public-apis

const fetchQuote = async (e) => {
    e.preventDefault();
    const quote = await fetch('https://api.kanye.rest/');
    const quoteJSON = await quote.json();
    displayQuote(quoteJSON); 
};

const displayQuote = (quoteJSON) => {

    console.log(quoteJSON.quote);
    var randomNumber = Math.floor(Math.random() * (10 -1) + 1);
    console.log(randomNumber)
    document.getElementById('quote-display').innerHTML = "\"" + quoteJSON.quote + "\"";
    document.getElementById('kanye-img').src = "images\\image" + randomNumber + ".jpg";
};

//Event clicking
const quoteChange = document.getElementById('quote-changer');
quoteChange.addEventListener('submit', fetchQuote);     