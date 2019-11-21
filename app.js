const express = require("express");
const request = require("request");
const app= express();

const url = "http://www.omdbapi.com/?s=";
const apikey = "&apikey=c37ed75b";

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("Movies");
})

app.get("/results", (req,res)=> {
    const sValue = req.query.search;
    request(url + sValue + apikey, (err, response, body)=> {
        if(!err && response.statusCode == 200) {
            const results = JSON.parse(body);
            res.render("results", {results: results})
        }
    })
    
})


app.listen(3000, ()=>{console.log("Serving!")});