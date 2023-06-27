const express = require('express')
const exphbs  = require('express-handlebars')
const mysql   = require('mysql')

const port = 3000

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//express para pegar o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)
// pegando o body em json
app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res)  {
    res.render('home')
})

//configuracao express para pegar o body
app.post('/books/insertbook', function (req, res) {
    
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`
    

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
        }
        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Carlos731219##',
    database: 'nodemysql2',
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }
        console.log('Conectou ao MYSQL!')

        app.listen(port)
})

