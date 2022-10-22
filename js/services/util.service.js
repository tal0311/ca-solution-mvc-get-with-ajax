function loadFromStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

function getAsCSV() {
  const poks = getPoksForCsv()
  console.log('poks:', poks)
  let csvStr = `Name,height,Weight,Abilities`
  poks.forEach(({ name, weight, height, abilities }) => {
    const csvLine = `\n${name},${height},${weight},${abilities}`
    csvStr += csvLine
  })
  return csvStr
}

function getAsCSVGeneric() {
  let csvStr = Object.keys(createToy()).map(capitlaize).join()
  gToys.forEach((toy) => {
    if (!toy.isSelected) return
    const csvLine = Object.values(toy).join()
    csvStr += '\n' + csvLine
  })
  return csvStr
}
