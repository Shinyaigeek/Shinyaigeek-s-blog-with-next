const express = require('express')
const next = require('next')

const dirN = require('./scripts/getFileNumber.js')
const getFileContent = require('./scripts/getFileContent.js')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()



const itemN = dirN('./items').length

const itemList = getFileContent(itemN / 2)

console.log(itemList)

app
  .prepare()
  .then(() => {
    const server = express()


    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const postIndex = req.params.id 
      const postProps = {
        postIndex:postIndex,
        postInfo:itemList[postIndex -   1]
      }
      app.render(req, res, actualPage,postProps)
    })

    server.get('/', (req, res) => {
      console.log(77777)
      const actualPage = '/'
      const HomeProps = {
        itemN: itemN / 2,
        itemList:itemList
      }
      app.render(req, res, actualPage, HomeProps)
    })

    server.get('*', (req, res) => {
      console.log(88888)
      const actualPage = '/'
      const HomeProps = {
        itemN: itemN / 2,
        itemList:itemList
      }
      app.render(req, res, actualPage, HomeProps)
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