const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.js");

router.get("/", postsController.index)
router.get("/:slug", postsController.show)
router.get("/creates", postsController.create)
router.get("/:slug/download", postsController.download)


module.exports = router;