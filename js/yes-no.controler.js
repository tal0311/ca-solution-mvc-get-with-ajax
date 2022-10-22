function renderByAns(data) {
  const { answer } = data
  if (answer === 'yes') {
    getData('joke', renderJoke)
    return
  }
  getData('dog', renderImg)
}

function renderJoke({ value }) {
  const strHtml = `
  <h2>${value}</h2>
  `
  $('.ans-container').html(strHtml)
}
function renderImg({ message }) {
  const strHtml = `
  <img class="dog-img" src="${message}"/>
  `
  $('.ans-container').html(strHtml)
  // document.querySelector().innerHTML = strHtml
}

function onQuestion(ev) {
  ev.preventDefault()
  getData('ask', renderByAns)
}
