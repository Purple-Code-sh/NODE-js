import { createServer } from 'node:http'

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // OK
    console.log('User requested: /')
    res.end('<h1>Home Page</h1>')
  } else if (req.url === '/contact') {
    res.statusCode = 200 // OK
    console.log('User requested: /contact')
    res.end('<h1>Contact page</h1>')
  } else {
    res.statusCode = 404 // error
    console.log('User requested a not valid url')
    res.end('<h1>404 error</h1>')
  }
}
const serverSHM = createServer(processRequest)

serverSHM.listen(desiredPort, () => {
  console.log(
    `Server listening biatch, on port: http://localhost:${desiredPort}`
  )
})
