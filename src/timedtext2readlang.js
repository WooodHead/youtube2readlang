import xml2js from 'xml2js'

export function timedtext2readlangAsync(transcriptXmlString, callback) {
  xml2js.parseString(transcriptXmlString, (err, result) => {
    callback(timedtext2readlangSync(result))
  })
}

export function timedtext2readlangSync(result) {
  const book = {
    plainText: '',
    htmlMarkup: false,
    generatedVersion: 0,
    audioMap: [],
  }

  let wordCount = 0

  result.transcript.text.forEach((t) => {
    book.plainText += t._ + "\n\n"
    book.audioMap.push({t: parseFloat(t.$.start), w: wordCount})
    wordCount += t._.split(" ").length
  })

  return book
}
