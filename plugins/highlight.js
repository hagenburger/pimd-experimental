const highlightPlugin = function (config) {
  config.addInfoStringParser(/highlight=([^\s]+)/, function (match, rules) {
    this.insertions = this.insertions || []
    
    rules = rules.split(';')
    rules.forEach((rule) => {
      regexpInfo = rule.match(/\/(.+)\/([igm]*)/)
      const regexp = new RegExp(regexpInfo[1], regexpInfo[2])
      this.content.replace(regexp, (match, offset) => {
        
        this.insertions.push({
          offset: offset,
          html: `<i style="font-style: inherit; background: yellow">`
        })
        this.insertions.push({
          offset: offset + match.length,
          html: `</i>`
        })
      })
    })
  })
}

module.exports = highlightPlugin