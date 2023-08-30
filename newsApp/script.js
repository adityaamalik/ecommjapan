// Your News API key
const API_KEY = "3c13a51f56fd4709951cbc21373af1a8";

window.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  );
  const data = await response.json();

  const newsContainer = document.getElementById("newsContainer");

  data.articles.forEach((article) => {
    const newsItem = `
        <div class="col-md-4">
            <div class="news-item p-4">
                <img src="${article.urlToImage}" alt="${article.title}">
                <h5>${article.title}</h5>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        </div>
        `;
    newsContainer.innerHTML += newsItem;
  });
});
