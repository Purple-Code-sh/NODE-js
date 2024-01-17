import { createServer } from 'node:http'

import dittoJSON from './pokemon/ditto.mjs'

const proccesRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-type', 'text/html ; charset=utf-8')
          return res.end('<h1>404</h1>')
      }
    case 'POST':

      break

    default:
      break
  }
}

const serverSHM = createServer(proccesRequest)

serverSHM.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
