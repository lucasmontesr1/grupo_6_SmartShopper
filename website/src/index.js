const express = require('express');
const app = express();
const path = require('path');
const webRoutes = require(path.resolve(__dirname, './routes/webRoutes'));
const PORT = 3001;
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(webRoutes);


app.listen(PORT, console.log(`Starting server on port: ${PORT}`));
