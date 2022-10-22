function onInit() {
  getData('genre', renderGenre)
}

function renderGenre({ genres }) {
  console.log(genres)
  const strHtmls = genres
    .map((item) => {
      const { id, name } = item
      return ` <article class="genre-preview" onclick="onRedItem('${name}','${id}')">${name}</article>`
    })
    .join('')

  document.querySelector('.genre-list').innerHTML = strHtmls
}

function renderMovies({ results }) {
  console.log('data:', results)
  const strHtmls = results
    .map((movie) => {
      const { overview, poster_path, title } = movie
      return `<article class='movie-preview'>
      <img
        src="https://image.tmdb.org/t/p/w500/${poster_path}"
        alt=''
      />
      <div class='info-container'>
        <h2>${title}</h2>
        <p>${overview}</p>
      </div>
    </article>`
    })
    .join('')

  document.querySelector('.movie-list').innerHTML = strHtmls
}

function onRedItem(name, itemId) {
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=497c6c97aae1c9875bd429048ace1c76&with_genres=${itemId}`

  getData(URL, renderMovies, name)
}
