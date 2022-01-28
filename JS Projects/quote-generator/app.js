const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
let anonymous = [];

nullQuotes = () => {
    for (let i = 0; i < localQuotes.length; i++) {
    const nQuote = localQuotes[i];
    if(nQuote.author === null){
        nQuote.author = "ANONYMOUS";
        anonymous.push(nQuote);
    }
}
}

newQuote = () => {
    if (quote.author === null) {
        quote.author = "ANONYMOUS";
        console.log(quote.text, '-', quote.author)
    } else {
        console.log(quote.text, '-', quote.author)
    }
};

anonymousQuotes = () => {
    nullQuotes();
    anonQuote = anonymous[Math.floor(Math.random() * anonymous.length)];
    console.log(anonQuote.text, '-', anonQuote.author)
}


// newQuote();

anonymousQuotes();