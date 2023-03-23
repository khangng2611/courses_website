const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')

const app = express();
const port = 3000;

const route = require('./routes/index');

const db = require('./config/db')
//connect db
db.connect()

//Static file
app.use(express.static(path.join(__dirname, 'public')));

//middleware (html form)
app.use(express.urlencoded());
//middleware (code js)
app.use(express.json());

// method-override
app.use(methodOverride('_method'))

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`Aapp listening on port ${port}`);
});
