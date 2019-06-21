const express = require('express')
const next = require('next')

const dirN = require('./scripts/getFileNumber.js')
const getFileContent = require('./scripts/getFileContent.js')
const getFileTag = require('./scripts/getFileTag.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()





app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const itemN = dirN('./items').length
      const itemList = getFileContent(itemN)
      const postIndex = req.params.id
      const postProps = {
        postIndex: postIndex,
        postInfo: itemList[postIndex - 1]
      }
      app.render(req, res, actualPage, postProps)
    })

    server.get('/', (req, res) => {
      const itemN = dirN('./items').length
      const itemList = getFileContent(itemN)
      const actualPage = '/'
      const HomeProps = {
        itemN: itemN / 2,
        itemList: itemList,
      }
      app.render(req, res, actualPage, HomeProps)
    })

    server.get('/tag/:name', (req, res) => {
      const actualPage = '/'
      const itemN = dirN('./items').length
      const tag = req.params.name
      const itemList = getFileTag(tag,itemN)
      const HomeProps = {
        itemN: itemN / 2,
        itemList: itemList,
      }
      app.render(req, res, actualPage, HomeProps)
    })

    server.get('/about', (req, res) => {
      const actualPage = '/about'
      app.render(req, res, actualPage)
    })

    server.get('/privacypolicy', (req, res) => {
      const actualPage = '/privacypolicy'
      app.render(req, res, actualPage)
    })

    server.get('/get/homeinfo', (req, res) => {
      const itemN = dirN('./items').length
      const itemList = getFileContent(itemN / 2)
      const HomeProps = {
        itemN: itemN / 2,
        itemList: itemList,
      }
      res.send(HomeProps)
    })

    server.get('*', (req, res) => {
      const actualPage = '/error'
      app.render(req, res, actualPage)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })

  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })