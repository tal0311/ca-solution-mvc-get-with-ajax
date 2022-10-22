function onInit() {
  getData('poks', renderPoks)
}

function renderPoks({ results }) {
  const strHtmls = results
    .map((pok) => {
      const { name } = pok
      return `
      <article class="pok-preview ${name}">
      <img src=""/>
        <h4>${name}</h4>
      </article>`
    })
    .join('')
  $('.poks-list').html(strHtmls)

  results.forEach(({ url }) => getData(url, renderPok))
}

function renderPok(pok) {
  const { sprites, name } = pok
  const pokImgs = Object.values(sprites).filter(
    (sprite) => typeof sprite === 'string'
  )
  const length = pokImgs.length

  let idx = 0
  setInterval(() => {
    if (idx === length) idx = 0
    let img = pokImgs[idx]
    $(`.${name} img`).attr('src', img)
    idx++
  }, 2000)
  savePoks(pok)
}

function downloadCSV(elLink) {
  const csvContent = getAsCSV()
  elLink.href = 'data:text/csv;charset=utf-8,' + csvContent
}
