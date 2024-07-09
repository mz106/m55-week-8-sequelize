const { Router } = require("express");
const bookRouter = Router();

// http://localhost:5001/books/test
bookRouter.get("/test", async (req, res) => {
  res.status(200).json({ message: "test a ok!" });
});

// http://localhost:5001/books/books/awesome
bookRouter.get("/awesome", async (req, res) => {
  res.status(200).json({ message: "test a ok!" });
});

module.exports = bookRouter;
