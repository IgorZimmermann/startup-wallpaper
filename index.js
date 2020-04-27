const puppeteer = require('puppeteer')
const { writeFileSync } = require('fs')
const wallpaper = require('wallpaper')

async function getImage() {
  const browser = await puppeteer.launch({executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'})
  const page = await browser.newPage()
  await page.goto('https://www.reddit.com/r/wallpaper/search?q=1920x1080&restrict_sr=1&sort=top')
  await page.waitFor(1000)
  let href = await page.evaluate(() => document.querySelector('.Post:nth-child(1) .styled-outbound-link').getAttribute('href'))
  browser.close()
  return href
}

async function setBackground() {
  let imgHREF = await getImage()
  const browser = await puppeteer.launch({executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'})
  const page = await browser.newPage()
  const viewSource = await page.goto(imgHREF)
  writeFileSync(__dirname + "/.cachewallpaper.png", await viewSource.buffer())

  await wallpaper.set(__dirname + "/.cachewallpaper.png")
  browser.close()
}
setBackground()