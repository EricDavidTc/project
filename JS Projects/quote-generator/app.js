const container = document.querySelector("#quote-container");
let quoteText = document.querySelector("#quote");
let quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#twitter");
const loader = document.querySelector(".loader");

// Show loading

loading = () => {
  loader.hidden = false;
  container.hidden = true;
};

// Loading complete

complete = () => {
  container.hidden = false;
  loader.hidden = true;
};

//  Get quote
getQuote = () => {
  quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
};

// Get new quote
getNewQuote = () => {
  loading();
  getQuote();
  //define quote length for lon-quote class
  quoteLength = quote.text.length;

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
  complete();
};

// Tweet a quote

tweet = () => {
  if (quoteLength < 100) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`;
    window.open(twitterUrl, "_blank");
  } else {
    quoteText.innerHTML = "Too long to tweet";
    quoteAuthor.innerHTML = "Quote Generator";
  }
};

// activate btns
newQuoteBtn.addEventListener("click", getNewQuote);
tweetBtn.addEventListener("click", tweet);
getNewQuote();
