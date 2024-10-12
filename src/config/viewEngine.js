const handlebars = require('express-handlebars'); 
const { ModifierFlags } = require('typescript');


function setupViewEngine(app){
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',  
    })); 
    app.set('view engine', 'hbs');
    app.set('views', './src/views'); 
}

module.exports = setupViewEngine; 