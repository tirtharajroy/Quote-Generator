// Select Quote Text and Author from Document
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

// Function to Retrieve Quotes
function getQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quoteText.textContent = data.content;
        quoteAuthor.textContent = data.author;
      })  
      .catch(err => console.log(err));
}

  