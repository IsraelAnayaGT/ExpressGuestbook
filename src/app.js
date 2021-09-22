const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { request } = require('http');
const { response } = require('express');

/********************************************************************************/
//***********************  Servidor Inicio **************************************/
/********************************************************************************/

//***************** Initializations Inicialización Inicio *************************/
const app = express();
//***************** Initializations Inicialización Final *************************/

//*********************** Configuración Settings Inicio *************************/
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//********************** Configuración Settings Final **************************/

//******************** Comunicaión Middlewares Inicio *************************/
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//******************** Comunicaión Middlewares Final *************************/

//************************** Rutas Routes Inicio ****************************/
app.use(require('./routes/entries.routes'));
//************************** Rutas Routes Final ****************************/

//** 404 handler error **/
app.use((req, res) => {
    res.status(404).render('404');
});

//** Iniciando la apligacion Staring the app**S/
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
})


/********************************************************************************/
//*************************  Servidor Final *************************************/
/********************************************************************************/