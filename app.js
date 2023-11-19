let currentSlide = 0;

function fetchMotivation() {
    fetch(`https://strangerthings-quotes.vercel.app/api/quotes/50`)
        .then(response => response.json())
        .then(data => {
            const quote = data[0].quote;
            const author = data[0].author;
            displayMotivation(quote, author);
        })
}

function displayMotivation(quote, author) {
    const container = document.getElementById("motivation-container");
    const newSlide = document.createElement("div");
    newSlide.classList.add("carousel-slide");
    newSlide.innerHTML = `<p>${quote}</p><p>- ${author}</p>`;
    container.appendChild(newSlide);
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? 0 : currentSlide - 0;
    showSlide(currentSlide);
}

function nextSlide() {
    fetchMotivation();
}

fetchMotivation();