const apiKey = '76d079f0';

async function searchMovie() {
    const movieTitle = document.getElementById('movieTitle').value;
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;
    // console.log(url)

    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    
    const movieDataDiv = document.getElementById('movieData');
    
    if (data.Response === "True") {
        movieDataDiv.innerHTML = `
            <h2>(${data.Title}) (${data.Year})</h2>
            <img src="${data.Poster}" alt="${data.Title} Poster" />
            <p><strong>Genre:</strong> ${data.Genre}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
            <p><strong>Director:</strong> ${data.Director}</p>
            <p><strong>Actors:</strong> ${data.Actors}</p>
        
             
        `;
    } else {
        movieDataDiv.innerHTML = `<p>${data.Error}</p>`;
        
    }
}