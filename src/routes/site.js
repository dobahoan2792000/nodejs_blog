var express = require("express");
var router = express.Router();
const searchController = require("../app/controllers/SiteController");
router.get("/search", searchController.search);
router.get("/", searchController.index);
module.exports = router;
