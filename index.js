const { writeFileSync } = require('fs')
const wallpaper = require('wallpaper')
const axios = require('axios').default
const cheerio = require('cheerio')

const uri = 'https://www.reddit.com/r/wallpaper/search?q=1920x1080&restrict_sr=1&sort=top&t=day'

async function getImage() {
  let res = await axios.get(uri)
  let $ = cheerio.load(res.data)
  return $('.styled-outbound-link').eq(1).attr('href')
}

async function setBackground() {
  let imgHREF = await getImage()
  axios.get(imgHREF, {
    responseType: 'arraybuffer'
  }).then(buffer => {
    writeFileSync(__dirname + "/.cachewallpaper.png", buffer.data)
    wallpaper.set(__dirname + "/.cachewallpaper.png")
  })
}
setBackground()