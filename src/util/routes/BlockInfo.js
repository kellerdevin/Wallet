const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    blockinfo: "0x627306090abab3a6e140...",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /products"
  });
});

module.exports = router;
