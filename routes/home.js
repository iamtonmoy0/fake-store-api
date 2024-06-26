const router = require("express").Router();

const home = require("../controller/home");

router.get("/", home.indexPage);
router.get("/docs", home.docsPage);

module.exports = router;
