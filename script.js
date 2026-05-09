const quotes = [
  "Believe you can and you're halfway there.",
  "The best time to start was yesterday. The next best time is now.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "You are stronger than you think."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}