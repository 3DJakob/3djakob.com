
express = require 'express'

app = express()

app.set 'views', 'public'
app.set 'view engine', 'jade'

app.get '/', (req, res) ->
  res.render 'index'

app.use express.static __dirname + '/public'





app.listen 2000
