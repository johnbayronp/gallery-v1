var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use("/archivos", express.static('public')); // para montar un middleware, static() retorna el middle.. 
app.use(express.static('assets'));


app.use(bodyparser.json()); //para peticiones en application/json
app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req,res){
	res.render("index");
});


app.get("/login",function(req,res){	
	res.render("login");
});


app.post("/users" , function(req,res){
	console.log("Email: "+ req.body.email +"\n");
	console.log("Password: " + req.body.password +"\n");
  res.send("Datos de inicio de sesion , validados!");
});

app.listen(80);
