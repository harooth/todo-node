import express from "express";
import fs from "fs"
import path from "path"

const app = express();
app.use(express.static("public"))

app.use(express.json())

app.get("/", (req, res) => {
	// res.sendFile(path.resolve("public/index.html"))
	req.redirect("/index.html")
})

// let todos = [
// 	// {"message" : "go to the store", "checked": false},
// 	// {"message" : "eat something healthy", "checked": false}
// ]

app.get("/todos", (req, res) => {
	fs.promises.readFile(path.resolve('data.json'), "utf8").then(todos=>{
		res.send(todos)
	})
	
})

app.post("/todos", (req, res)=>{
	fs.promises.writeFile(path.resolve("data.json"), JSON.stringify(req.body, undefined, 2))
	.then(()=>{
		res.send("poxeci todos-y")
	})
	// todos = req.body;
	// res.send("poxeci todos-y")
})



app.listen(3000);
