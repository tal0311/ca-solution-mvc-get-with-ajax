function onInit() {
  getData('poks', renderPoks)
}

function renderPoks({ results }) {
  // console.log('poks:', results)
  const strHtmls = results
    .map((pok) => {
      console.log('pok:', pok)
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
    console.log('img:', img)
    let pokImg = $(`.${name} img`).attr('src', img)
    idx++
  }, 2000)
}
