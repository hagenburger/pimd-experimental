const fs = require('fs')
const Config = require('pimd/lib/config')
const Document = require('pimd/lib/document')
const Prism = require('prismjs')

// Official plugin:
const previewPlugin = require('@pimd/preview-plugin')

// Experimental local plugins:
const showmorePlugin = require('./plugins/showmore')
const highlightPlugin = require('./plugins/highlight')
const linkPlugin = require('./plugins/link')
const syntaxPlugin = require('./plugins/syntax')

const config = new Config()

config.highlight = function(code, lang) {
  return Prism.highlight(code, Prism.languages[lang])
}

config.use(previewPlugin)
config.use(showmorePlugin)
config.use(highlightPlugin)
config.use(linkPlugin)
config.use(syntaxPlugin) // Needs to be the last one.

const markdownSource = fs.readFileSync('test.md').toString()
const doc = new Document(markdownSource, config)

// Add PrismJS syntax highlighter styles:
const prismTheme = fs.readFileSync('node_modules/prismjs/themes/prism-solarizedlight.css')
doc.contents.add('css', prismTheme)

// Some additional styling:
doc.contents.add('css', `
  html {
    background: #f9f9f9;
  }
  body {
    margin: auto;
    padding: 50px;
    max-width: 800px;
  }
  code {
    background: #eee;
  }
  .pimd-example {
    background: #eee;
    padding: 10px;
    border-radius: 3px;
  }
  .pimd-preview {
    background: white;
    padding: 10px;
  }
`)

doc.renderDocument().then((html) => {
  fs.writeFile('test.html', html, (error) => {
    if (error) console.error(error)
  })
  console.info('Successfully created test.html.')
})
