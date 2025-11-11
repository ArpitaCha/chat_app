import express from "express";
import db from "config/db.js";

const app = express();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    db();
    console.log(`Server running on http://localhost:${PORT}`);
});