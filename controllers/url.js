const shortid = require("shortid");
const URL = require("../models/url")

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    console.log(body)
    if (!body.url) return res.status(400).json({ Error: "URL is required" });
    const shortID = shortid(8);
    console.log(shortID)

    await URL.create({
        shortid: shortID,
        redirectURL: body.url,
        visitHistory: []
    })
    console.log("done")
    return res.json({ id: shortID });
}

module.exports = {
    handleGenerateNewShortURL,
};

