let express = require('express');
const db_connect = require('./config/dbConnect');
require('dotenv').config()
let app = express();

app.use(express.json())
//Local Port
const PORT = process.env.PORT

// connect mongoDb
db_connect()





app.listen(PORT, () => console.log(`${PORT} listen !!`))






