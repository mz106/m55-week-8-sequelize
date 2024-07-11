const { Router } = require("express");
const authorRouter = Router();

const { addAuthor } = require("./controllers");

authorRouter.post("/addAuthor", addAuthor);

module.exports = authorRouter;
