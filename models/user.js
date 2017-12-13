var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Constructor de esquemas

mongoose.connect('mongodb://localhost/fotos');

var user_schema = new Schema({ // Crea un objeto 
 name:String,
 username: String,
 password:String,
 age: Number,
 email: String,
 date_of_birth: Date, 
});


var usuario = mongoose.model("usuario",user_schema);

module.exports.usuario = usuario;

/*tipos de datos mongo =>
String 
Number 	
Date 
Buffer 
Boolean
Mixed 
Array
Objectid
*/