const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const router = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// MiddleWare
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//CMLHttpRequest, fetch, axios

// HTTP logger
            app.use(morgan('combined'));
// Test commit

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Router init
router(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
