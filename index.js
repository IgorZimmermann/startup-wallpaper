const Reddit = require('reddit')
const config = require('./config.json')

const reddit = new Reddit(config.reddit)