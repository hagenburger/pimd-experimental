const linkPlugin = function (config) {
  config.addInfoStringParser(/link=([^\s]+)/, function (match, rules) {
    this.insertions = this.insertions || []
    
    rules = rules.split(';')
    rules.forEach((rule) => {
      regexpInfo = rule.match(/\/(.+)\/([igm]*)=(.+)/)
      const regexp = new RegExp(regexpInfo[1], regexpInfo[2])
      const url = regexpInfo[3]
      this.content.replace(regexp, (match, offset) => {
        this.insertions.push({
          offset: offset,
          html: `<a href="${url}" style="color: inherit; text-decoration: underline">`
        })
        this.insertions.push({
          offset: offset + match.length,
          html: `</a>`
        })
      })
    })
  })
}

module.exports = linkPlugin