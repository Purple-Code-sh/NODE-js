import { createServer } from 'node:http'

const proccesRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case GET:
      switch (url) {
        case '/pokemon/dito':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          break

        default:
          break
      }

      break

    default:
      break
  }
}

const server = createServer(proccesRequest)

server.listen(6666, () => {
  console.log('Server listening on port: http://localhost:6666')
}
)
