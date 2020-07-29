const mongoose = require("mongoose")
const express = require("express")
const Url = require("./models/url")
const shortid = require("shortid")
const app = express()

mongoose.connect("mongodb://localhost/urlDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))

app.get("/", async (req, res) => {
    const urls = await Url.find()
    res.render("index", {urls: urls})
})

app.post("/shortenUrl", async (req, res) => {
    const longUrl = req.body.longUrl
    const url = await Url.findOne({ long: longUrl})
    if (url) {
        
    } else {
        const urlCode = shortid.generate()
        const shortUrl = "localhost:5000/" + urlCode
        await Url.create({ long: longUrl, short: shortUrl, urlCode: urlCode})
        res.redirect('/')
    }
    
})

app.get("/:urlCode", async (req, res) => {
    const urlCode = await Url.findOne({urlCode: req.param.urlCode})
    if (urlCode == null) {
        return res.status(404)
    }
    res.redirect(urlCode.long)
})

app.listen(5000)
