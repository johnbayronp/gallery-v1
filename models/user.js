var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Constructor de esquemas

mongoose.connect('mongodb://localhost/fotos'); //conectar la base de datos , localhost/"nombre_de_la_base_de_datos" 

var user_schema = new Schema({ // Crea un objeto 
 name:String,
 username: String,
 password:String,
 age: Number,
 email: String,
 date_of_birth: Date, 
});

user_schema.virtual("password_confirmation").get( function(){
      return this.p_c;
}).set(function(password){
	 this.p_c = password;
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
