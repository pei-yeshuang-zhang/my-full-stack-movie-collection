// Use these node modules to set up .env file
const path = require('path')
const dotenv = require('dotenv')

// get the path of .env
const envPath = path.join(__dirname, '..', '.env')

// tell dotenv node module where to find our .env file
dotenv.config({ path: envPath })

//^ You must set up dotenv BEFORE you set up the server
// so put the dotenv things right at the top of your index file

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
  console.log(process.env.MOVIE_KEY)
})
