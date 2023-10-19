import { createServer } from 'node:http'

const desiredPort = process.env.PORT ?? 1234

const serverSHM = createServer((req, res) => {
  console.log('Request received', req.url)
  res.end('Hola mundo')
})

serverSHM.listen(desiredPort, () => {
  console.log(
    `Server listening biatch, on port: http://localhost:${desiredPort}`
  )
})
