//+=============================================
//Configuracion de puertos
//=============================================
process.env.PORT = process.env.PORT || 3000;
///============================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
///===========================================
let urlDB;
if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb+srv://admin:peluditos@cluster0-3o4h8.mongodb.net/PeluditosDB?retryWrites=true&w=majority';
}else{
    urlDB = 'mongodb+srv://admin:peluditos@cluster0-3o4h8.mongodb.net/PeluditosDB?retryWrites=true&w=majority';
}

process.env.urlDB = urlDB;


