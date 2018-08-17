// This is temporary and won’t be implemented this way:
const syntaxPlugin = function (config) {
  config.addInfoStringParser(/\+syntax/, function () {
    let html = config.highlight(this.code.textContent, this.info.lang)
    let insertions = this.insertions || []
    
    html = processInsertions(html, insertions)
    this.code.innerHTML = html
  })
}

module.exports = syntaxPlugin

// This will insert HTML into the code at a certain offset after the syntax
// highlighter took action. It is respecting the HTML.
function processInsertions (code, insertions) {
  insertions = insertions.sort((a, b) => a.offset > b.offset)
  let codeWithHighlights = ''
  let offset = 0
  let nextPosition = insertions.shift()
  let insideCharacter = false
  let insideHtml = false
  
  for (let i = 0; i <= code.length; i++) {
    const character = code[i] || ''
    if (character === '<') {
      insideHtml = true
      if (nextPosition && offset == nextPosition.offset) {
        codeWithHighlights += nextPosition.html
        nextPosition.html = ''
      }
    } else if (insideHtml && character === '>') {
      insideHtml = false
    } else if (!insideHtml) {
      if (nextPosition && offset === nextPosition.offset) {
        codeWithHighlights += nextPosition.html
        nextPosition = insertions.shift()
      }
      if (character === '&') {
        insideCharacter = true
        if (nextPosition && offset == nextPosition.offset) {
          codeWithHighlights += nextPosition.html
          nextPosition.html = ''
        }
      } else if (insideCharacter && character === ';') {
        insideCharacter = false
        offset++
      } else if (!insideCharacter) {
        offset++
      }
    }
    codeWithHighlights += character
  }
  return codeWithHighlights
}
  