const express = require('express');
const ejsMate = require('ejs-mate');

// require('dotenv').config();

const app  = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'))

app.engine('ejs', ejsMate);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/gallery', (req, res) => {
    res.render('gallery');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/404', (req, res) => {
    res.render('404');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/service', (req, res) => {
    res.render('service');
});
app.get('/single-portfolio', (req, res) => {
    res.render('single-portfolio');
});
app.get('/single-post', (req, res) => {
    res.render('single-post');
});
app.get('/blog-fullwidth', (req, res) => {
    res.render('blog-fullwidth');
});
app.get('/blog-left-sidebar', (req, res) => {
    res.render('blog-left-sidebar');
});
app.get('/blog-right-sidebar', (req, res) => {
    res.render('blog-right-sidebar');
});

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
});
