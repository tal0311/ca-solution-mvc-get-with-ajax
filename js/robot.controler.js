function onInit() {
  const URL =
    'http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone%7Cformat%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState%7Cabbr%7d&zip=%7bzip%7d&pretty=true'
  renderSkeleton()
  setTimeout(getData, 2000, URL, renderRobots)
  // getData(URL, renderRobots)
}

function renderSkeleton(isLoading = true) {
  if (!isLoading) {
    document.querySelector('.robot-list').innerHTML = ''
    return
  }
  const strHtmls = `
 <div class="card-preview is-loading">
    <div class="image"></div>
    <div class="content">
      <h2></h2>
      <p></p>
     </div> 
  </div>
 `
  console.log(strHtmls)
  document.querySelector('.robot-list').innerHTML = strHtmls.repeat(10)
}

function renderRobots(robots) {
  robots
  const strHtmls = robots
    .map((robot) => {
      const { address, city, fname, lname, state, tel, zip, img } = robot
      return `
       <article class="robot-preview">
              <img src="https://robohash.org/${fname}" alt="robot" />
              <h3>${fname} ${lname}</h3>
              <address>${address}, ${city}, ${state}</address>
              <small>${zip}</small>
              <small>${tel}</small>
            </article>
       `
    })
    .join('')
  document.querySelector('.robot-list').innerHTML = strHtmls
}
