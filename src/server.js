const express       = require('express')
const productRouter = require('./routes/products.router.js')
const cartRouter    = require('./routes/cart.router.js')
const handlebars    = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', handlebars)


app.use('/api/cart', cartRouter)
app.use('/api/products', productRouter)

app.use((error, req, res, next) => {
    console.log(error.stack)
    res.status(500).send('Error del servidor.')
})


app.listen(PORT, () => {
    console.log('Escuchando en el puerto: ', PORT)
})


