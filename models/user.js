var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Constructor de esquemas

mongoose.connect('mongodb://localhost/fotos'); //conectar la base de datos , localhost/"nombre_de_la_base_de_datos" 

var posibles_valores = ["M" , "F"]; // validaciones
var email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Coloca un email"]; //expresion regular

var password_validation = { //valida si las contraseñas son iguales
		validator: function(p){
       return this.password_confirmation == p;
   	},
   	message: "Las contraseñas no son iguales"
   }


var user_schema = new Schema({ // Crea un objeto 
 name:String,
 username: {type:String, required:"introduce tu usuario" , maxlength:[50,"Username es muy grande"]},
 password: {type:String,
  minlength:[10,"El password es muy corto"],validate:password_validation}, // validaciones para la password
 age: {type:Number, min:[5, "la edad no puede ser menor que 5"],max:[80,"la edad es muy alta"]}, //validaciones y escribir un mensaje{type:xxx , atributo:[x,"message"]}
 email: {type:String, required: "el correo es obligatorio", match:email_match}, //validaciones
 date_of_birth: Date, 
 sex: {type:String, enum:{values:posibles_valores,message:"Opcion no valida"}}, //validaciones
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
