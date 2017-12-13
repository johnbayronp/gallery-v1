var express = require("express");
var bodyparser = require("body-parser");
var app = express();
var usuarios = require('./models/user').usuario;



app.use("/archivos", express.static('public')); // para montar un middleware, static() retorna el middle.. 
app.use(express.static('assets'));


app.use(bodyparser.json()); //para peticiones en application/json
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req,res){
	res.render("index");
});


app.get("/login",function(req,res){	

	usuarios.find(function(err,doc){
		console.log(doc);
	res.render("login");
	});

});


app.post("/users" , function(req,res){
	var user = new usuarios({ email: req.body.email, password: req.body.password}); 
	
	user.save(function(){
		res.send("Datos , validados!");
	});
	
});



app.listen(80);
