var urls = {
  joke: 'https://api.chucknorris.io/jokes/random',
  dog: 'https://dog.ceo/api/breeds/image/random',
  ask: 'https://yesno.wtf/api',
  genre:
    'https://api.themoviedb.org/3/genre/movie/list?api_key=497c6c97aae1c9875bd429048ace1c76',
  poks: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
}

const KEY = 'moviesDB'
var gCache = loadFromStorage(KEY) || {}

function getData(url, cb, name = null) {
  if (urls[url]) url = urls[url]

  if (gCache[name]) {
    console.log('getting from storage')
    cb(gCache[name])
    return
  }
  console.log('url:', url)
  var XHR = new XMLHttpRequest()
  XHR.onreadystatechange = () => {
    if (XHR.readyState === XMLHttpRequest.DONE && XHR.status === 200) {
      var res = JSON.parse(XHR.responseText)
      if (name) gCache[name] = res
      console.log(gCache)
      name && saveToStorage(name, gCache)
      cb(res)
    }
  }
  XHR.open('GET', url, true)
  XHR.send()
}
