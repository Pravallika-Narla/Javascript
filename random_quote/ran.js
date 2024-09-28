const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
];
const backgroundColors = [
  '#FF5733', // Red
  '#33FF57', // Green
  '#3357FF', // Blue
  '#F3FF33', // Yellow
  '#FF33B5', // Pink
];

function getRandomQuote() {
  const randomIndex = Math.round(Math.random() * quotes.length);
  return quotes[randomIndex];
}
function getRandomBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  return backgroundColors[randomIndex];
}

function createQuoteGenerator() {
  const container = document.createElement('div');
  container.classList.add('container');

  const quoteElement = document.createElement('p');
  quoteElement.id = 'quote';
  quoteElement.textContent = `"${getRandomQuote().text}"`;
  
  const authorElement = document.createElement('p');
  authorElement.id = 'author';
  authorElement.textContent = `- ${getRandomQuote().author}`;
  
  const button = document.createElement('button');
  button.id = 'new-quote';
  button.textContent = 'New Quote';
  container.style.backgroundColor = getRandomBackgroundColor();

  button.addEventListener('click', () => {
      const { text, author } = getRandomQuote();
      quoteElement.textContent = `"${text}"`;
      authorElement.textContent = `- ${author}`;
      container.style.backgroundColor = getRandomBackgroundColor();
  });

  container.appendChild(quoteElement);
  container.appendChild(authorElement);
  container.appendChild(button);
  document.body.appendChild(container);
}

createQuoteGenerator();
