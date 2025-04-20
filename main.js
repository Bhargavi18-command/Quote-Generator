

      const quotes = [
        {
          text: "The best way to predict the future is to create it.",
          author: "~Peter Drucker",
        },
        {
          text: "Life is 10% what happens to us and 90% how we react to it.",
          author: "~Charles R. Swindoll",
        },
        {
          text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
          author: "~Winston Churchill",
        },
        {
          text: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "~Franklin D. Roosevelt",
        },
        {
          text: "Believe you can and you're halfway there.",
          author: "~Theodore Roosevelt",
        },
      ];

      function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = quotes[randomIndex].text;
        document.getElementById("author").textContent =
          quotes[randomIndex].author;
      }
   