// Mengimport library atau dependensi
const router = require("express").Router();

// Routing untuk halaman home
router.get("/", function (req, res) {
    res.render("home");
});

// Routing untuk halaman kontak
router.get("/contact", function (req, res) {
    res.render("contact");
});

// Routing untuk halaman tentang
router.get("/about", function (req, res) {
    res.render("about");
});

// Export
module.exports = router;
