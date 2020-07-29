const mongoose = require("mongoose")
const express = require("express")
const Url = require("./models/url")
const tools = require("./tools")
var path = require("path")
var port = process.env.PORT || 5000
const baseUrl = "http://localhost:5000/"
const app = express()

mongoose.connect("mongodb://localhost/urlDatabase", {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
    const urls = await Url.find()
    res.render("index", {urls: urls})
})

app.post("/shortenUrl", async (req, res) => {
    const longUrl = req.body.longUrl
    const url = await Url.findOne({ long: longUrl})
    if (url) {
        // await Url.deleteMany({}) For deleting entries from database
        res.status(401).json("Url already used")
    } else {
        const urlCode = tools.generateID()
        while (!Url.findOne({ urlCode: urlCode })) {
            urlCode = tools.generateID()
        }
        const shortUrl = baseUrl + urlCode
        await Url.create({ long: longUrl, short: shortUrl, urlCode: urlCode})
        res.redirect('/')
    }
})

app.get("/:urlCode", async (req, res) => {
    const urlCode = await Url.findOne({urlCode: req.params.urlCode})
    if (urlCode == null) {
        return res.status(404).json("Url not found")
    }
    res.redirect(urlCode.long)
})

app.listen(port)
