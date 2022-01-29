const container = document.querySelector("#quote-container");
let quoteText = document.querySelector("#quote");
let quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#twitter");
const loader = document.querySelector(".loader");
let apiQuotes = [];

// New quote

newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote.text);
  quoteLength = quote.text.length;
};

// Get quote from API

async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

getNewQuote = () => {
  getQuote();
  //define quote length for lon-quote class

  //check if quote length is greater than 55
  if (quoteLength > 55) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //check for quote.author = null and assign anonymous as quote.author
  if (quote.author === null) {
    quote.author = "ANONYMOUS";
    quoteText.innerHTML = quote.text;
    quoteAuthor.innerHTML = quote.author;
  } else {
    quoteText.innerHTML = quote.text;
    quoteAuthor.innerHTML = quote.author;
  }
};

getQuote();
getNewQuote();
