const SiteController = require('../app/controllers/SiteController');
const newRouter = require('./news')
const siteRouter = require('./site')
function route(app){
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   });
    //   app.get('/news', (req, res) => {
    //     res.render('news')
    //   });
    app.use('/news',newRouter)
    //   app.get('/search', (req, res) => {
    //     res.render('search')
    //   });
    app.use('/',siteRouter)
    //   app.post('/search', (req, res) => {
    //     console.log(req.body.q)
    //     res.send('')
    //   });
}

module.exports = route;