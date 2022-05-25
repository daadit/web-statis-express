// Mengimport library atau dependensi
const express = require("express");
const path = require("path");
const app = express();

// Memanggil atau mendefenisikan folder routers
const appRouting = require("./routers/app-route");

// Memanggil atau mendefenisikan folder views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Memanggil atau mendefenisikan folder assest
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Memanggil file routing ketika website diakses
app.use("/", appRouting);

// Menentukan di port mana express js dijalankan
app.listen(8080, () => {
    console.log("Application running in port : 8080");
});

// Export app
module.exports = app;
