  /* Используем GET для обращения к Quotable API – выводит случайную цитату */
  function getRandomQuote() {
      fetch('https://api.quotable.io/random', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('quote').textContent = data.content;
        document.getElementById('author').textContent = `– ${data.author}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

/* Сброс страницы до дефолтного состояния – кнопка Reset all */
function resetAll() {
  document.getElementById("quote").innerHTML = "A random quote will be displayed here";
  document.getElementById("author").innerHTML = "&mdash; Author";
  document.getElementById("post").innerHTML = "The most recent quote will be displayed here";
  document.getElementById("author-db").innerHTML = "&mdash; Author";
}

/* Используем POST для добавления новых цитат пользователей в db.json */
function addUserQuote() {
  const userQuote = document.getElementById('userQuote').value;
  const author = prompt("Enter the author of the quote:");
  const newQuote = { title: userQuote, author: author };

  fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newQuote)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    getRecentPost();
    // Очистить textarea после добавления цитаты
    document.getElementById('userQuote').value = "";
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

/* Используем GET для того, чтобы вытащить и отобразить последнюю цитату, которую добавил пользователь */
function getRecentPost() {
  fetch('http://localhost:3000/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(post => {
      document.getElementById('post').textContent = post.title;
      document.getElementById('author-db').textContent = `– ${post.author}`;
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

/* Используем GET для того, чтобы вытащить и отобразить ВСЕ цитаты, которуе добавил пользователь */
function getAllQuotes() {
  fetch('http://localhost:3000/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    let quotes = '';
    data.forEach(post => {
      quotes += `${post.title} - ${post.author}\n`;
    });
    alert(quotes);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}




